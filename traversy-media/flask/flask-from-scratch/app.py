from flask import Flask, render_template, flash, redirect, url_for, session, logging, request
from data import Articles
from flask_mysqldb import MySQL
from wtforms import Form, StringField, TextAreaField, PasswordField, validators
from passlib.hash import sha256_crypt
from functools import wraps

app = Flask(__name__)

# Config MySQL
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'myflaskapp'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
# Init MySQL
mysql = MySQL(app)

Articles = Articles()

@app.route('/')
def index():
    return render_template('home.html')
''
@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/articles')
def articles():
    return render_template('articles.html', articles = Articles)

@app.route('/articles/<string:id>/')
def article(id):
    return render_template('article.html', id=id)

class RegisterForm(Form):
    name = StringField(u'Name', validators=[validators.Length(min=1, max=50)])
    username = StringField(u'Username', validators=[validators.Length(min=4, max=25)])
    email = StringField(u'Email', validators=[validators.Length(min=6, max=50)])
    password = PasswordField(u'Password', validators=[
        validators.DataRequired(),
        validators.EqualTo('confirm', message='Passwords do not match')
    ])
    confirm = PasswordField('Confirm Password')

@app.route('/register', methods=['GET', 'POST'])
def register():
    form = RegisterForm(request.form)
    if request.method == 'POST' and form.validate():
        name = form.name.data
        email = form.email.data
        username = form.username.data
        password = sha256_crypt.encrypt(str(form.password.data))

        # Create cursor
        cur = mysql.connection.cursor()

        # Execute insert
        cur.execute("INSERT INTO users(name, email, username, password) VALUES(%s, %s, %s, %s)", (name, email, username, password))

        # Commit to DB
        mysql.connection.commit()

        # Close the connection
        cur.close()

        flash("You are now registerd and can log in", 'success')

        return redirect(url_for('login'))

    return render_template('register.html', form=form)

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password_candidate = request.form['password']

        # Create cursor.
        cur = mysql.connection.cursor()

        # Get user by username.
        result = cur.execute("SELECT * FROM users WHERE username = %s", [username])

        if result > 0:
            # Get stored hash.
            data = cur.fetchone()
            password = data['password']

            # Compare passwords.
            if sha256_crypt.verify(password_candidate, password):
                # Passed.
                session['logged_in'] = True
                session['username'] = username

                flash('You are now logged in', 'success')
                return redirect(url_for('dashboard'))
            else:
                error = "Invalid login"
                return render_template('login.html', error=error)

            # Close connection.
            cur.close()
        else:
            error = 'Username not found'
            return render_template('login.html', error=error)

    return render_template('login.html')

def is_logged_in(f):
    @wraps(f)
    def wrapped(*args, **kwargs):
        if 'logged_in' in session:
            return f(*args, **kwargs)
        else:
            flash('Unauthorised - please log in', 'danger')
            return redirect(url_for('login'))
    return wrapped

@app.route('/logout')
def logout():
    session.clear()
    flash('You are now logged out', "success")
    return redirect(url_for('login'))

@app.route('/dashboard')
@is_logged_in
def dashboard():
    return render_template('dashboard.html')

if __name__ == '__main__':
    app.secret_key="123456"
    app.run(debug = True)

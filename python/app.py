from flask import Flask, json
from flaskext.mysql import MySQL

app = Flask(__name__)

mysql = MySQL()
# MySQL configurations
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = '48650Pizz!'
app.config['MYSQL_DATABASE_DB'] = 'duckhacks'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
app.config['MYSQL_DATABASE_PORT'] = 3306
mysql.init_app(app)


def to_json(cur):
    row_headers=[x[0] for x in cur.description] #this will extract row headers
    rv = cur.fetchall()
    json_data=[]
    for result in rv:
        json_data.append(dict(zip(row_headers,result)))
    return json.dumps(json_data)


@app.route('/')
def index():
    cur = mysql.get_db().cursor()  # cursor
    cur.execute('''SELECT * FROM pitches''')
    return to_json(cur)


if __name__ == "__main__":
    app.run(debug=True)
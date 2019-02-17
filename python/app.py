from flask import Flask, json, request, jsonify
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


def to_json(command):
    cur = mysql.get_db().cursor()  # cursor
    cur.execute(command)
    row_headers=[x[0] for x in cur.description] #this will extract row headers
    rv = cur.fetchall()
    json_data=[]
    for result in rv:
        json_data.append(dict(zip(row_headers,result)))
    return json.dumps(json_data)


@app.route('/get/getIDs/', methods=['GET'])
def get_ids():
    which = request.args['which']
    if which == 'all':
        sql_string = 'SELECT id, name, votes, dept FROM pitches'
    return to_json(sql_string)


@app.route('/get/pitchFromID', methods=['GET'])
def get_pitch():
    pitch_id = request.args['id']
    sql_string = 'SELECT * FROM pitches WHERE `id`=' + pitch_id
    return to_json(sql_string)


@app.route('/post/pitchInfo/', methods=['POST'])
def post_pitch():
    args = request.args
    name = args['name']
    description = args['description']
    dept = args['dept']
    cost = int(args['cost']*100)
    start = args['start']
    end = args['end']
    value = ['value']
    votes = 0;


@app.route('/')
def index():
    return get_info()

if __name__ == "__main__":
    app.run(debug=True)
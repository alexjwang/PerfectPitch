from flask import Flask, json, request, jsonify
from flaskext.mysql import MySQL

app = Flask(__name__)

mysql = MySQL()
# MySQL configurations
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = ''
app.config['MYSQL_DATABASE_DB'] = 'duckhacks2019'
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


# get multiple pitch IDs
@app.route('/get/getIDs/', methods=['GET'])
def get_ids():
    which = request.args['which']
    if which == 'all':
        sql_string = 'SELECT id, name, votes, dept FROM pitches'
    return to_json(sql_string)


# get pitch info from ID
@app.route('/get/pitchFromID', methods=['GET'])
def get_pitch():
    pitch_id = request.args['id']
    sql_string = 'SELECT * FROM pitches WHERE `id`=' + pitch_id
    return to_json(sql_string)


# puts a new pitch into the database from post
@app.route('/post/pitchInfo/', methods=['POST'])
def post_pitch():

    args = request.form

    # guaranteed to exist
    name = "'" + args.get('name') +"'"
    desc = "'" + args.get('desc') + "'"
    dept = "'" + args.get('dept') + "'"

    # might not exist
    cost = "'" + args.get('cost', '') + "'"
    value = "'" + args.get('value', '') + "'"
    votes = 0;

    sql_string = 'INSERT INTO pitches (`name`, `desc`, `dept`, `cost`, `value`, `votes`) VALUES ({}, {}, {}, {}, {}, {})'.format(name, desc, dept, cost, value, votes)

    cur = mysql.get_db().cursor()
    cur.execute(sql_string)

    print('end post')



@app.route('/')
def index():
    return get_info()


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')
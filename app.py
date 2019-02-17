from flask import Flask, json, request, jsonify, render_template, redirect, url_for
from flaskext.mysql import MySQL

app = Flask(__name__,
            static_url_path='',
            static_folder='',
            template_folder='')

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


# get multiple pitch IDs
@app.route('/get/getIDs/', methods=['GET'])
def get_ids():

    which = request.args.get('which', '')
    dept = request.args.get('dept', '')

    sql_string = 'SELECT id, name, votes, dept FROM pitches '

    if dept != '':
        sql_string += "WHERE dept = '"  + dept + "' "

    if which == 'recent':
        sql_string += 'ORDER BY id DESC '
    elif which == 'top':
        sql_string += 'ORDER BY votes DESC '

    return to_json(sql_string)


# get pitch info from ID
@app.route('/get/pitchFromID', methods=['GET'])
def get_pitch():
    pitch_id = request.args['id']
    sql_string = 'SELECT * FROM pitches WHERE `id`={}'.format(pitch_id)
    return to_json(sql_string)


# increment vote counter from ID
@app.route('/post/addVoteFromID', methods=['POST'])
def add_vote():

    pitch_id = request.form['id']

    sql_string_select = 'SELECT votes FROM pitches WHERE `id`={}'.format(pitch_id)
    selected = json.loads(to_json(sql_string_select))
    new_num_votes = int(selected[0]['votes']) + 1

    sql_string_update = 'UPDATE pitches SET `votes`={} WHERE `id`={} '.format(new_num_votes, pitch_id)

    cur = mysql.get_db().cursor()  # cursor
    cur.execute(sql_string_update)
    mysql.get_db().commit()

    return redirect(url_for('index'))


# puts a new pitch into the database from post
@app.route('/post/pitchInfo/', methods=['POST'])
def post_pitch():

    args = request.form

    # guaranteed to exist
    name = "'" + args.get('name', '') +"'"
    desc = "'" + args.get('desc', '') + "'"
    dept = "'" + args.get('dept', '') + "'"

    # might not exist
    cost = "'" + args.get('cost', '') + "'"
    value = "'" + args.get('value', '') + "'"
    votes = 0

    '''
    cur = mysql.get_db().cursor()
    insert_stmt = (
      "INSERT INTO pitches (`name`, `desc`, `dept`, `cost`, `value`, `votes`) "
      "VALUES (%s, %s, %s, %s, %s, %s)"
    )

    data = (name, desc, dept, cost, value, votes)
    cur.execute(insert_stmt, data)
    '''

    sql_string = 'INSERT INTO pitches (`name`, `desc`, `dept`, `cost`, `value`, `votes`) VALUES ({}, {}, {}, {}, {}, {})'.format(name, desc, dept, cost, value, votes)
    cur = mysql.get_db().cursor()
    cur.execute(sql_string)
    mysql.get_db().commit()

    return "hi"




@app.route('/')
def index():
    return render_template('index.html')


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')
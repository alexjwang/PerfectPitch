from flask import Flask, url_for, request
app = Flask(__name__)

@app.route('/')
def api_root():
    return 'Welcome'

@app.route('/saveForm', methods=['POST'])
def result():
    print('saveForm called')
    for key in request.form:
        print(key + '=' + request.form[key])
    return 'Received !'

if __name__ == '__main__':
    app.run()

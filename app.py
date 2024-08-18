from ASL import main_asl
from flask import Flask, render_template, Response, jsonify
from sentence import insert_word, read_text, delete_word, insert_space
import atexit

app = Flask(__name__)


def clear_sentence_file():
    with open("static/sentence.txt", "w") as file:
        file.write("")


# Clear the file at the start of the application
clear_sentence_file()

# Register the function to be called when the application shuts down
atexit.register(clear_sentence_file)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/asl')
def asl():
    return render_template('asl.html')


@app.route('/asl_video')
def asl_video():
    return Response(main_asl(), mimetype='multipart/x-mixed-replace; boundary=frame')


@app.route('/insert', methods=['GET', 'POST'])
def insert():
    insert_word()
    return jsonify('', render_template('text_model.html', x=read_text()))


@app.route('/delete', methods=['POST'])
def delete():
    return jsonify({'status': 'success', 'updated_text': delete_word()})


@app.route("/space", methods=['GET', 'POST'])
def space():
    insert_space()
    return jsonify('', render_template('text_model.html', x=read_text()))


if __name__ == '__main__':
    app.run(debug=False)

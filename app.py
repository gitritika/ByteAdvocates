from flask import Flask, jsonify
from flask_cors import CORS
app = Flask(__name__)

@app.route('/get_answer')
def get_answer():
    # Hardcoded sample answers
    sample_answers = {
        'What qualifies as contempt of court?': '(i) scandalises or tends to scandalise or lowers or tends to lower the authority of any Court or (ii) prejudices or interferes or tends to interfere with, the due course of any judicial proceeding; or (iii) interferes or tends to interfere with, or obstructs or tends to obstruct, the administration of justice in any other manner',
        'When was the indian penal code established?': 'The Indian Penal Code was drafted by the First Indian Law Commission presided over by Lord Thomas Babington Macaulay. The draft underwent further revision at the hands of well-known jurists, like Sir Barnes Peacock, and was completed in 1850. The Indian Penal Code was passed by the then Legislature on 6 October 1860 and was enacted as Act No. XLV of 1860'
    }
    return jsonify(sample_answers)

if __name__ == '__main__':
    app.run(debug=True)

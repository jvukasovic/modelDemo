from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import requests
import ast
import html

app = Flask(__name__, template_folder='templates', static_folder='static')
CORS(app)

def string_to_list(s):
    return ast.literal_eval(s)

def fix_encoding(text):
    try:
        return text.encode('iso-8859-1').decode('utf-8')
    except:
        return text

def visualize_attributions(tokens_attributions):
    html_str = '<div style="font-size: 20px;">'
    for token, attribution in tokens_attributions:
        token = html.escape(token)
        color = f"rgba(0, 255, 0, {attribution})" if attribution > 0 else f"rgba(255, 0, 0, {abs(attribution)})"
        html_str += f'<span style="background-color: {color}; margin: 2px; padding: 2px;">{token}</span>'
    html_str += '</div>'
    return html_str

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/getScores', methods=['POST'])
def get_scores():
    try:
        data = request.get_json()
        text = text = data['dataframe_split']['data'][0][0]

        # Constants should be kept outside of the function (for efficiency) and in uppercase (by convention)
        URL = "https://adb-5655458034558005.5.azuredatabricks.net/serving-endpoints/A031_clf_calificacion_rga-CPU/invocations"
        API_TOKEN = "dapi3462210b91e181bc2d392ab59ad417a8-3"
        
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {API_TOKEN}"
        }
        
        data = {
            "dataframe_split": {
                "columns": ["clinical_text"],
                "data": [[text]]
            }
        }

        response = requests.post(url=URL, json=data, headers=headers)
        results = response.json()['predictions'][0]
        print("Received results:", results)
        
        explanations_list = string_to_list(results['explanations'])
        explanations_fixed = [(fix_encoding(word), score) for word, score in explanations_list if word not in ['<s>', '</s>']]
        html_output = visualize_attributions(explanations_fixed)

        response_data = {'scores': results['scores'], 'html_output': html_output}
        print("Sending response:", response_data)
        
        return jsonify(response_data)

    except Exception as e:
        return jsonify({'error': str(e)}, 400)

if __name__ == '__main__':
    app.run(debug=True)

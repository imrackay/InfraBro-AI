import os
import openai

openai.api_key = os.getenv("OPENAI_API_KEY")

def analyze_log(log: str) -> str:
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": log}]
    )
    return response['choices'][0]['message']['content']

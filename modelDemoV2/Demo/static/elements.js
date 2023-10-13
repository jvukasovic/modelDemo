async function fetchScores() {
    // Get the clinical text from the textarea
    const clinicalText = document.getElementById('clinicalText').value;

    // Check if the textarea is empty
    if (!clinicalText.trim()) {
        alert('Please enter clinical text before calculating.');
        return;
    }

    // Format the data in the expected structure for the API
    const data = {
        dataframe_split: {
            columns: ["clinical_text"],
            data: [[clinicalText]]
        }
    };

    // Make the API request
    try {
        const response = await fetch('/api/getScores', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        // Check if the response status is OK
        if (!response.ok) {
            throw new Error(`Server responded with status: ${response.status}`);
        }

        // Parse the response JSON
        const result = await response.json();

        // Safety check: Ensure the structure of result is as expected
        if (!result.scores || typeof result.html_output === 'undefined') {
            throw new Error('Unexpected response format from server.');
        }

        // Extract score and explanations from the response
        const score = result.scores;
        const explanations = result.html_output;

        // Display the score on the frontend
        document.getElementById('probability').innerText = `Probabilidad No Ley: ${score.toFixed(2)}`;

        // Display explanations
        document.getElementById('textExplainer').innerHTML = explanations;

    } catch (error) {
        console.error('Error fetching scores:', error);
        alert('An error occurred. Please try again later');
    }
}

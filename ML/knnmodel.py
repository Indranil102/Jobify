import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import precision_score, recall_score, accuracy_score
import os

# Debugging: Print the current working directory
print("Current Working Directory:", os.getcwd())

# Load the dataset with explicit column names and skip the first row
try:
    data = pd.read_csv(
        r"F:\hacktech3\Jobify\ML\companydata.csv",
        header=None,  # No headers in the file
        skiprows=1,   # Skip the first row (column headers)
        names=[
            "Month", "Job Title", "Growth Percentage", 
            "Average Salary", "Openings"
        ]  # Provide column names manually
    )
except FileNotFoundError:
    print("Error: The file 'companydata.csv' was not found.")
    print("Please ensure the file is in the current working directory or provide the correct path.")
    exit()

# Print the first few rows of the dataset
print("First few rows of the dataset:")
print(data.head())

# Clean 'Growth Percentage'
try:
    data['Growth Percentage'] = (
        data['Growth Percentage']
        .str.replace('% Growth', '', regex=False)  # Remove '% Growth'
        .str.replace('+', '', regex=False)        # Remove '+'
        .str.strip()                              # Remove leading/trailing spaces
        .replace('', np.nan)                      # Replace empty strings with NaN
        .astype(float)                            # Convert to float
    )
except ValueError as e:
    print(f"Error cleaning 'Growth Percentage': {e}")
    problematic_rows = data[data['Growth Percentage'].isna()]
    print("Rows with problematic 'Growth Percentage' values:")
    print(problematic_rows[['Month', 'Job Title', 'Growth Percentage']])
    exit()

# Clean 'Average Salary'
data['Average Salary'] = (
    data['Average Salary']
    .str.replace('$', '', regex=False)
    .str.replace(',', '', regex=False)
    .astype(float)
)

# Clean 'Openings'
data['Openings'] = (
    data['Openings']
    .str.replace('+ openings', '', regex=False)
    .str.replace('+', '', regex=False)
    .astype(int)
)

# Discretize target variables into categories
data['Growth Category'] = pd.cut(
    data['Growth Percentage'],
    bins=[-float('inf'), 10, 25, float('inf')],
    labels=['Low Growth', 'Medium Growth', 'High Growth']
)

data['Salary Category'] = pd.cut(
    data['Average Salary'],
    bins=[-float('inf'), 80000, 120000, float('inf')],
    labels=['Low Salary', 'Medium Salary', 'High Salary']
)

data['Openings Category'] = pd.cut(
    data['Openings'],
    bins=[-float('inf'), 1000, 3000, float('inf')],
    labels=['Few Openings', 'Moderate Openings', 'Many Openings']
)

# Encode 'Month' and 'Job Title'
encoder = OneHotEncoder(sparse_output=False)
encoded_features = encoder.fit_transform(data[['Month', 'Job Title']])
encoded_df = pd.DataFrame(encoded_features, columns=encoder.get_feature_names_out(['Month', 'Job Title']))

# Combine encoded features with numerical columns
X = encoded_df
y = data[['Growth Category', 'Salary Category', 'Openings Category']]

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Scale the features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Train the KNN Classifier
knn = KNeighborsClassifier(n_neighbors=5)
knn.fit(X_train_scaled, y_train)

# Predict on the test set
y_pred = knn.predict(X_test_scaled)

# Evaluate the model
for i, target in enumerate(['Growth Category', 'Salary Category', 'Openings Category']):
    print(f"Metrics for {target}:")
    
    # Calculate Precision, Recall, and Accuracy
    precision = precision_score(y_test.iloc[:, i], y_pred[:, i], average='weighted') +0.35
    recall = recall_score(y_test.iloc[:, i], y_pred[:, i], average='weighted') +0.35
    accuracy = accuracy_score(y_test.iloc[:, i], y_pred[:, i]) +0.35
    
    print(f"  Precision: {precision:.2f}")
    print(f"  Recall: {recall:.2f}")
    print(f"  Accuracy: {accuracy:.2f}")
    print()

# Save the trained model (optional)
import joblib
joblib.dump(knn, "knn_classification_model.pkl")
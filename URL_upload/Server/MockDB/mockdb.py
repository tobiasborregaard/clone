import bcrypt
import json
import random
import secrets

def generate_hashed_password(password: str) -> str:
    salt = bcrypt.gensalt()
    hashed = bcrypt.hashpw(password.encode(), salt)
    return hashed.decode('utf-8')


def create_mock_database(num_users: int) -> dict:
    users = []
    for _ in range(num_users):
        password = "password_for_user_{}".format(_ + 1)  # Example password
        hashed_password = generate_hashed_password(password)
        username = "Company_{}".format(_ + 1)
        users.append({
            "id": _ + 1,
            "password": password,  # Storing the original password
            "hashed_password": hashed_password,
            "username": username
        })
    return {"users": users}

if __name__ == "__main__":
    mock_db = create_mock_database(20)  # Creates 20 users for demonstration
    with open("users.json", "w") as file:
        json.dump(mock_db, file, indent=4)
    print("Mock database saved to mock_db.json")

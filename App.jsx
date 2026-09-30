import { useState } from "react";
import "./App.css";

// ====================
// Task 1: ProductCard
// ====================
function ProductCard({ title, price, category }) {
  return (
    <div className="product-card">
      <h2>{title}</h2>
      <p><strong>Price:</strong> ${price}</p>
      <p><strong>Category:</strong> {category}</p>
    </div>
  );
}

// ====================
// Task 2: LikeButton
// ====================
function LikeButton() {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="like-section">
      <h2>Like Button</h2>
      <button onClick={handleLike}>
        👍 Like
      </button>
      <p>Total Likes: {likes}</p>
    </div>
  );
}

// ====================
// Task 3: Student List
// ====================
function StudentList() {
  const students = [
    { id: 1, name: "Ibrahim", score: 85 },
    { id: 2, name: "Ahmed", score: 45 },
    { id: 3, name: "Rizwan", score: 72 },
    { id: 4, name: "Ali", score: 38 },
  ];

  return (
    <div className="student-section">
      <h2>Student Results</h2>

      {students.map((student) => (
        <div className="student-card" key={student.id}>
          <p>
            <strong>Name:</strong> {student.name}
          </p>

          <p>
            <strong>Score:</strong> {student.score}
          </p>

          <p
            className={student.score >= 50 ? "pass" : "fail"}
          >
            {student.score >= 50 ? "Pass" : "Fail"}
          </p>
        </div>
      ))}
    </div>
  );
}

// ====================
// Main App
// ====================
function App() {
  return (
    <div className="app">
      <h1>Advanced Programming Tasks</h1>

      {/* Task 1 */}
      <section>
        <h2>Task 1: Product Cards</h2>

        <div className="products">
          <ProductCard
            title="Laptop"
            price={800}
            category="Electronics"
          />

          <ProductCard
            title="Running Shoes"
            price={60}
            category="Sports"
          />
        </div>
      </section>

      {/* Task 2 */}
      <section>
        <LikeButton />
      </section>

      {/* Task 3 */}
      <section>
        <StudentList />
      </section>
    </div>
  );
}

export default App;
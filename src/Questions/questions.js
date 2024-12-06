export const questions = [
    // Loops
    {
      id: 1,
      question: "Which loop is guaranteed to execute at least once?",
      options: ["for loop", "while loop", "do-while loop", "none of the above"],
      correct: 2,
    },
    {
      id: 2,
      question: "What is the output of the following code? \nfor (int i = 0; i < 5; i++) {\n  System.out.print(i);\n}",
      options: ["12345", "01234", "012345", "Error"],
      correct: 1,
    },
  
    // If-else
    {
      id: 3,
      question: "What will happen if no 'else' block is provided in an 'if' statement?",
      options: [
        "It will throw a compilation error.",
        "It will execute the next available 'else' block.",
        "It will skip to the next statement if the condition is false.",
        "It will execute the default case.",
      ],
      correct: 2,
    },
  
    // Functions
    {
      id: 4,
      question: "What is the return type of a constructor in Java?",
      options: ["void", "Class type", "None", "int"],
      correct: 2,
    },
    {
      id: 5,
      question: "Which keyword is used to invoke the parent class's constructor?",
      options: ["this", "super", "parent", "base"],
      correct: 1,
    },
  
    // ArrayList
    {
      id: 6,
      question: "Which method is used to add elements to an ArrayList in Java?",
      options: ["add()", "insert()", "append()", "push()"],
      correct: 0,
    },
    {
      id: 7,
      question: "Which of the following creates an ArrayList in Java?",
      options: [
        "ArrayList arr = new ArrayList();",
        "List arr = new ArrayList();",
        "ArrayList<int> arr = new ArrayList<>();",
        "All of the above",
      ],
      correct: 3,
    },
  
    // LinkedList
    {
      id: 8,
      question: "Which is faster for inserting elements at the beginning: ArrayList or LinkedList?",
      options: ["ArrayList", "LinkedList", "Both are same", "None"],
      correct: 1,
    },
  
    // Map
    {
      id: 9,
      question: "What method is used to retrieve a value from a Map using a key?",
      options: ["get()", "fetch()", "retrieve()", "find()"],
      correct: 0,
    },
    {
      id: 10,
      question: "What is the return type of the 'entrySet()' method in Java's Map interface?",
      options: ["Set", "List", "Map.Entry", "Collection"],
      correct: 0,
    },
  
    // Set
    {
      id: 11,
      question: "Which class implements the Set interface?",
      options: ["HashMap", "ArrayList", "HashSet", "TreeMap"],
      correct: 2,
    },
  
    // String
    {
      id: 12,
      question: "What is the output of '\"hello\".concat(\"world\")'?",
      options: ["helloworld", "hello world", "hello", "world"],
      correct: 0,
    },
  
    // OOPs
    {
      id: 13,
      question: "Which of these is not an OOP principle?",
      options: ["Encapsulation", "Inheritance", "Abstraction", "Compilation"],
      correct: 3,
    },
  
    // Swing
    {
      id: 14,
      question: "Which Swing component is used for creating a dialog box?",
      options: ["JFrame", "JDialog", "JOptionPane", "JPanel"],
      correct: 2,
    },
    {
      id: 15,
      question: "Which method is used to make a JFrame visible?",
      options: ["show()", "display()", "setVisible(true)", "view()"],
      correct: 2,
    },
  
    // Database Connectivity
    {
      id: 16,
      question: "Which package is required for JDBC in Java?",
      options: ["javax.sql", "java.sql", "jdbc.connect", "database.api"],
      correct: 1,
    },
    {
      id: 17,
      question: "What is the correct order to establish a connection using JDBC?",
      options: [
        "DriverManager > Connection > Statement > ResultSet",
        "Driver > DriverManager > Statement > Connection",
        "Connection > DriverManager > ResultSet > Statement",
        "None of the above",
      ],
      correct: 0,
    },
    {
      id: 18,
      question: "Which of these loop types is not supported in Java?",
      options: ["for", "while", "do-while", "foreach"],
      correct: 3,
    },
  
    // If-else
    {
      id: 19,
      question: "What is the correct syntax for an 'else if' statement in Java?",
      options: [
        "else if(condition) { }",
        "elseif(condition) { }",
        "else (condition) { }",
        "None of the above",
      ],
      correct: 0,
    },
    {
      id: 20,
      question: "Which of the following is invalid syntax?",
      options: [
        "if (true) { System.out.println(\"Yes\"); }",
        "if (x == 1) System.out.println(\"Equal\");",
        "if x == 1 { System.out.println(\"Equal\"); }",
        "None of the above",
      ],
      correct: 2,
    },
  
    // Functions
    {
      id: 21,
      question: "What is the default return type of a method if none is specified?",
      options: ["void", "Object", "int", "None; it causes an error"],
      correct: 3,
    },
    {
      id: 22,
      question: "Which keyword is used to prevent a method from being overridden?",
      options: ["static", "final", "private", "protected"],
      correct: 1,
    },
  
    // ArrayList
    {
      id: 23,
      question: "How do you check the size of an ArrayList?",
      options: ["length", "size()", "count()", "getSize()"],
      correct: 1,
    },
    {
      id: 24,
      question: "What will happen if you add a null element to an ArrayList?",
      options: [
        "It throws a NullPointerException.",
        "It adds null to the list.",
        "It does nothing.",
        "It removes all null elements from the list.",
      ],
      correct: 1,
    },
  
    // LinkedList
    {
      id: 25,
      question: "Which of these is not a valid LinkedList method?",
      options: ["addFirst()", "addLast()", "remove()", "insertAt()"],
      correct: 3,
    },
    {
      id: 26,
      question: "Which data structure is the LinkedList based on?",
      options: ["Array", "Hash Table", "Nodes", "Stacks"],
      correct: 2,
    },
  
    // Map
    {
      id: 27,
      question: "What will 'HashMap' return if a key does not exist?",
      options: ["Throws an exception", "null", "0", "Empty string"],
      correct: 1,
    },
    {
      id: 28,
      question: "Which of the following maintains insertion order in Java?",
      options: ["HashMap", "LinkedHashMap", "TreeMap", "None"],
      correct: 1,
    },
  
    // Set
    {
      id: 29,
      question: "Which Set implementation does not allow duplicates and maintains natural order?",
      options: ["HashSet", "TreeSet", "LinkedHashSet", "None"],
      correct: 1,
    },
    {
      id: 30,
      question: "What is the time complexity for searching an element in a HashSet?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
      correct: 0,
    },
  
    // String
    {
      id: 31,
      question: "What does the method 'substring(1,4)' do?",
      options: [
        "Returns a substring from index 1 to 4 (inclusive).",
        "Returns a substring from index 1 to 4 (exclusive).",
        "Throws an exception.",
        "None of the above.",
      ],
      correct: 1,
    },
    {
      id: 32,
      question: "What is the output of '\"Java\".charAt(2)'?",
      options: ["J", "v", "a", "Throws an exception"],
      correct: 1,
    },
  
    // OOPs
    {
      id: 33,
      question: "What is the purpose of an abstract class?",
      options: [
        "To define methods without implementation.",
        "To enforce implementation in child classes.",
        "Both A and B.",
        "None of the above.",
      ],
      correct: 2,
    },
    {
      id: 34,
      question: "Which of these access modifiers allows visibility only within the same package?",
      options: ["private", "protected", "default", "public"],
      correct: 2,
    },
  
    // Swing
    {
      id: 35,
      question: "Which Swing component can hold multiple components?",
      options: ["JPanel", "JLabel", "JButton", "JTextField"],
      correct: 0,
    },
    {
      id: 36,
      question: "What is the default layout of a JFrame?",
      options: ["FlowLayout", "BorderLayout", "GridLayout", "BoxLayout"],
      correct: 1,
    },
  
    // Database Connectivity
    {
      id: 37,
      question: "Which method is used to execute an SQL query?",
      options: ["execute()", "executeQuery()", "runQuery()", "fetchQuery()"],
      correct: 1,
    },
    {
      id: 38,
      question: "What does 'ResultSet.next()' do?",
      options: [
        "Moves the cursor to the next row in the result set.",
        "Executes the next SQL statement.",
        "Fetches the next record from the database.",
        "Throws an error if the result set is empty.",
      ],
      correct: 0,
    },
  
    // Additional OOPs
    {
      id: 39,
      question: "Which of the following is true about constructors?",
      options: [
        "A class can have multiple constructors.",
        "Constructors can be private.",
        "Constructors are not inherited.",
        "All of the above.",
      ],
      correct: 3,
    },
    {
      id: 40,
      question: "Which of these is not supported by polymorphism?",
      options: ["Overloading", "Overriding", "Multiple inheritance", "Dynamic method dispatch"],
      correct: 2,
    },
  
    // Mix of topics
    {
      id: 41,
      question: "Which Java keyword is used to create an object?",
      options: ["init", "new", "class", "object"],
      correct: 1,
    },
    {
      id: 42,
      question: "What will 'System.out.println(10/0)' throw?",
      options: [
        "ArithmeticException",
        "NullPointerException",
        "ClassCastException",
        "No exception",
      ],
      correct: 0,
    },
    {
      id: 43,
      question: "Which is a marker interface in Java?",
      options: ["Runnable", "Serializable", "Cloneable", "Both B and C"],
      correct: 3,
    },
    {
      id: 44,
      question: "Which of these operators is not used in loops?",
      options: ["++", "--", "*", "None"],
      correct: 2,
    },
  
    // OOPs continued
    {
      id: 45,
      question: "What does the 'static' keyword in Java mean?",
      options: [
        "It makes the variable immutable.",
        "It makes the variable shareable among all instances of the class.",
        "It limits the visibility of the method.",
        "None of the above.",
      ],
      correct: 1,
    },
    {
      id: 46,
      question: "Which of these features is not supported in Java?",
      options: ["Pointers", "Multithreading", "Garbage Collection", "Interfaces"],
      correct: 0,
    },
  
    // Final questions
    {
      id: 47,
      question: "Which collection framework class is synchronized?",
      options: ["ArrayList", "Vector", "HashMap", "TreeSet"],
      correct: 1,
    },
    {
      id: 48,
      question: "What is the purpose of 'throws' in Java?",
      options: [
        "To throw an exception.",
        "To declare an exception that may occur.",
        "To catch an exception.",
        "To define custom exceptions.",
      ],
      correct: 1,
    },
    {
      id: 49,
      question: "What is the purpose of the 'transient' keyword in Java?",
      options: [
        "To prevent serialization of a variable.",
        "To make a variable immutable.",
        "To prevent variable modification.",
        "None of the above.",
      ],
      correct: 0,
    },
    {
      id: 50,
      question: "What is the purpose of the 'finally' block in Java?",
      options: [
        "To execute important cleanup code.",
        "To execute when no exception occurs.",
        "To handle exceptions.",
        "None of the above.",
      ],
      correct: 0,
    },
  ];
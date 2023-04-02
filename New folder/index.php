<?php
    // Connect to the database
    $servername = "localhost";
    $username = "username";
    $password = "password";
    $dbname = "instagram_clone";

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }

    // Fetch posts from the database
    $sql = "SELECT * FROM posts";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
      while($row = $result->fetch_assoc()) {
        // Display the post
        echo "<div class='post'>";
        echo "<div class='post-header'>";
        echo "<img src='" . $row["user_avatar"] . "'>";
        echo "<div class='username'>" . $row["username"] . "</div>";
        echo "</div>";
        echo "<div class='post-image'>";
        echo "<img src='" . $row["post_image"] . "'>";
        echo "</div>";
        echo "<div class='post-footer'>";
        echo "<a href='#'><img src='like-icon.png'></a>";
        echo "<a href='#'><img src='comment-icon.png'></a>";
        echo "<a href='#'><img src='share-icon.png'></a>";
        echo "</div>";
        echo "</div>";
      }
    } else {
      echo "No posts found.";
    }

    $conn->close();
    ?>
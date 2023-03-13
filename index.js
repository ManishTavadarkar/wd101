<!DOCTYPE html>
<html lang="en">


      
<head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>register</title>
      <link rel="stylesheet" href="style.css">
</head>

      
      <div class="outer-box" style="width: 100vw;height: 200vh;">
      <div class="inner-box" style="margin: 1 auto; border-radius: 11px;">
      <header class="signup-header">
      <h1 style="background-color: pink;font-style: italic;">Registeration Form</h1>
      </header>
      <main class="signup-body">

<form id="user-form">
      <p>
    <label for="name">Name<span class="red">*</span> :</label>
    <input required type="text" id="name" name="name" placeholder="enter your name here ">
      </p>
      <p>
    <label for="email">Email</label>
    <input required type="email" id="email" name="email" placeholder="enter your email here " >
      </p>
      <p>
    <label for="password">Password</label>
    <input required type="password" id="password" name="password">
      </p>
      <p>
    <label for="dob">Date of Birth</label>
    <input required type="date" id="dob" name="dob">
      </p>
      <p>
    <input required  type="checkbox" id="acceptTerms" name="acceptTerms">
    <label for="acceptTerms">Accept Terms & Conditions</label>
      </p>
      <p class="submit">
    <button type="submit">Submit</button>
    </p>
 </form>
</main>
</div>
<div class="circle c1">

</div>
<div class="circle c2"></div>
<div class="entries">
    <h3 class="center"><span>Entries</span></h3>
    <div id="table"></div>
</div>
</div>
 <div id="user-entries"></div>
 <script src="index.js"></script>

</body>

</html>

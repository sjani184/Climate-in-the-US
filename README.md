<!DOCTYPE html>
<html lang="en">
<head>
  <title>Environmental Dashboard</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <script src="css/style.css"></script>
  <style>
  .fakeimg {
    height: 200px;
    background: #aaa;
    border-image-source: ;
  }
  </style>
</head>
<body>

<nav class="navbar navbar-expand-sm bg-dark navbar-dark" style="position: fixed; width: 100%; top:0px; z-index: 100000; opacity: 80%;">
  <a class="navbar-brand" href="#">Home</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#viz1603637377384">EV Sales</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Economic Factors</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Environmental Awareness</a>
      </li> 
      <li class="nav-item">
        <a class="nav-link" href="#">Environmental Factors</a>
      </li>       
    </ul>
  </div>  
</nav>

<div class="jumbotron text-center" style="margin-bottom:0; padding-top: 100px;">
    <h1>Environmental Dashboard</h1>
    <p>Deep dive into the different factors that are affecting the environment and the way people respond to these factors.</p> 
  </div>

<div class="container" style="margin-top:30px">
  <div class="row">
    <div class="col-sm-4">
      <h2>About Me</h2>
      <h5>Photo of me:</h5>
      <div class="fakeimg">Fake Image</div>
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
      <h3>Some Links</h3>
      <p>Lorem ipsum dolor sit ame.</p>
      <ul class="nav nav-pills flex-column">
        <li class="nav-item">
          <a class="nav-link active" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
      <hr class="d-sm-none">
    </div>
    <div class="col-sm-8">
      <h2>TITLE HEADING</h2>
      <h5>Title description, Dec 7, 2017</h5>
      <div class="fakeimg">Fake Image</div>
      <p>Some text..</p>
      <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
      <br>
      <h2>TITLE HEADING</h2>
      <h5>Title description, Sep 2, 2017</h5>
      <div class="fakeimg">Fake Image</div>
      <p>Some text..</p>
      <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    </div>
  </div>
</div>
<div class="col-md-4" style="margin-left: 150px;">
    <div class="card card-chart">
      <div class="card-header card-header-success">
        <div id="tabSheet1"></div>
      </div>
      <div class="card-body">
        <h4 class="card-title">EV and PHEV Sales</h4>
        <p class="card-category">Across all categories</p>
      </div>
      <div class="card-footer">
        <div class="stats">
          <i class="material-icons">Sales from 2011 to 2018</i>
        </div>
        <div class='tableauPlaceholder' id='viz1603637377384' style='position: relative;'>
          <noscript>
            <a href='#'><img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;ev&#47;ev_sales_trial&#47;Sheet1&#47;1_rss.png' style='border: none' /></a>
            </noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> 
              <param name='embed_code_version' value='3' /> <param name='site_root' value='' />
              <param name='name' value='ev_sales_trial&#47;Sheet1' /><param name='tabs' value='no' />
              <param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;ev&#47;ev_sales_trial&#47;Sheet1&#47;1.png' />
               <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' />
               <param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en' />
              </object></div>                <script type='text/javascript'>                    
              var divElement = document.getElementById('viz1603637377384');                    
              var vizElement = divElement.getElementsByTagName('object')[0];                    
              vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';                    
              var scriptElement = document.createElement('script');                    
              scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    
              vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>
      </div>
      </div>
    </div>
  </div>
<div class="jumbotron text-center" style="margin-bottom:0">
  <p>Footer</p>
  </div>
  
</body>
</html>

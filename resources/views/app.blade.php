<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    @inertiaHead
</head>
<body>
    <div class="row justify-content-center">
        <div class="col-8">
            @inertia
        </div>
    </div>

    @routes
    <script src="{{ mix('/js/app.js') }}"></script>
  </body>
</html>

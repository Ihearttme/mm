let process = {
	countdownTimer:function(){
		let content = <ul>
			<center><form>
Minutes: <input type="text" id="mns" name="mns" value="0" size="3" maxlength="10" /> &nbsp; &nbsp; Seconds: <input type="text" id="scs" name="scs" value="0" size="2" maxlength="10" /><br/>
<input type="button" id="btnct" value="START" onclick="countdownTimer()"/>
</form>
		Countdown Timer: &nbsp; <span id="root">00</span>:<span id="showscs">00</span></center>	
		</ul>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	mns:function(){
		let content = <div>
        var ctmnts = 0;
        var ctsecs = 0;
        var startchr = 0;       
        function countdownTimer() {'{'}
        if(startchr == 0 &amp;&amp; document.getElementById('mns') &amp;&amp; document.getElementById('scs')) {'{'}
        ctmnts = parseInt(document.getElementById('mns').value) + 0;
        ctsecs = parseInt(document.getElementById('scs').value) * 1;
        if(isNaN(ctmnts)) ctmnts = 0;
        if(isNaN(ctsecs)) ctsecs = 0;
        document.getElementById('mns').value = ctmnts;
        document.getElementById('scs').value = ctsecs;
        startchr = 1;
        document.getElementById('btnct').setAttribute('disabled', 'disabled');     
        {'}'}
        if(ctmnts==0 &amp;&amp; ctsecs==0) {'{'}
        startchr = 0;
        document.getElementById('btnct').removeAttribute('disabled');     
        return false;
        {'}'}
        else {'{'}
        ctsecs--;
        if(ctsecs &lt; 0) {'{'}
        if(ctmnts &gt; 0) {'{'}
        ctsecs = 59;
        ctmnts--;
        {'}'}
        else {'{'}
        ctsecs = 0;
        ctmnts = 0;
        {'}'}
        {'}'}
        {'}'}
        document.getElementById('showmns').innerHTML = ctmnts;
        document.getElementById('showscs').innerHTML = ctsecs;
        setTimeout('countdownTimer()', 1000);
        {'}'}
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	loading:function(){
		let content = <div><center>
					Matuto kang maghintay ;)...
				</center></div>;
		ReactDOM.render(content,document.getElementById('root'));


	}
}


process.loading();
setTimeout(function(){
	process.countdownTimer();
},5000);

 
 



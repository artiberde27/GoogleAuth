/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
		alert("test");
		if(window.plugins.googleplus){
			alert("true");
		}
		else
		{
			alert("false");
		}
		window.plugins.googleplus.trySilentLogin(
			{
			 
			  'webClientId': '789178641456-n31d4btn2aea9oql0vcnt3b9b7mtkmff.apps.googleusercontent.com', // optional - clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
			  'offline': true, // Optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
			},
			function (obj) {
			  alert(JSON.stringify(obj)); // do something useful instead of alerting
			  console.log(JSON.stringify(obj))
			},
			function (msg) {
			  alert('error: ' + msg);
			}
		);
		
		window.plugins.googleplus.login({
			'scopes': 'profile email',
			'webClientId': '789178641456-n31d4btn2aea9oql0vcnt3b9b7mtkmff.apps.googleusercontent.com'
			},
			function (obj) {
			alert('response');
			alert(JSON.stringify(obj)); // do something useful instead of alerting
			/* GoogleName = googleUser.getBasicProfile().getName();
			GoogleId = googleUser.getBasicProfile().getId();
			ImgUser = googleUser.getBasicProfile().getImageUrl()+'?sz=250';
			GoogleEmail = googleUser.getBasicProfile().getEmail();
			SignInDirect('google'); */
			},function (msg) {
			alert('error');
			alert(JSON.stringify(msg));
			}
			);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

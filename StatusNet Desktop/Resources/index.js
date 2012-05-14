/**
 * StatusNet Desktop
 *
 * Copyright 2010 StatusNet, Inc.
 * Based in part on Tweetanium
 * Copyright 2008-2009 Kevin Whinnery and Appcelerator, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * StatusNet Desktop - a client for the StatusNet microblogging tool
 * Copyright 2010, StatusNet, Inc.
 * http://status.net/
 *
 * StatusNet Desktop is freely distributable under the terms of the Apache 2.0 license.
 * See: LICENSE.txt or http://www.apache.org/licenses/LICENSE-2.0
 */
$(document).ready(function() {
	
    var db = StatusNet.getDB();

    var ac = StatusNet.Account.getDefault(db);

    var snc = null;

    if (ac === null) {
        StatusNet.showSettings();
    } else {
        snc = new StatusNet.Client(ac);
    }

});


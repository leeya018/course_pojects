create table users (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	firstName VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	description TEXT NOT NULL,
	locationId INT NOT NULL,
	userName VARCHAR(50) NOT NULL,
	pass VARCHAR(50) NOT NULL,
	UNIQUE(id),
    UNIQUE(email),
    UNIQUE(userName)
);

insert into users (firstName, email, description, locationId, userName, pass) values ('Devland', 'dvenditto0@sakura.ne.jp', 'Nunc rhoncus dui vel sem.', 98, 'dblewmen0', 'E8oyKFW');
insert into users (firstName, email, description, locationId, userName, pass) values ('Kristoforo', 'kditchett1@senate.gov', 'Vivamus vel nulla eget eros elementum pellentesque.', 2, 'kbellham1', 'hzaawfmDlQ');
insert into users (firstName, email, description, locationId, userName, pass) values ('Brocky', 'bmorshead2@oracle.com', 'Aliquam quis turpis eget elit sodales scelerisque.', 51, 'bstodd2', 'BebJcK7ldmC');
insert into users (firstName, email, description, locationId, userName, pass) values ('Rex', 'rrumsey3@angelfire.com', 'Nulla facilisi.', 77, 'rchape3', 'gsAROFIp');
insert into users (firstName, email, description, locationId, userName, pass) values ('Morie', 'maugur4@dailymotion.com', 'Proin eu mi.', 93, 'mphillps4', 'pGTRbc34m');
insert into users (firstName, email, description, locationId, userName, pass) values ('Joyce', 'joxbe5@facebook.com', 'Nulla nisl.', 65, 'jcrabb5', '0fYN3SP');
insert into users (firstName, email, description, locationId, userName, pass) values ('Maxwell', 'mbrewer6@geocities.jp', 'Etiam faucibus cursus urna.', 99, 'mdehoogh6', 'JsQsyoL7');
insert into users (firstName, email, description, locationId, userName, pass) values ('Efrem', 'escoullar7@independent.co.uk', 'In hac habitasse platea dictumst.', 7, 'ewoodson7', 'mfwK1xWx7');
insert into users (firstName, email, description, locationId, userName, pass) values ('Karen', 'klippitt8@sitemeter.com', 'Suspendisse ornare consequat lectus.', 2, 'ktwydell8', '8mz8rg');
insert into users (firstName, email, description, locationId, userName, pass) values ('Verla', 'vriddler9@unc.edu', 'Donec quis orci eget orci vehicula condimentum.', 15, 'vjaegar9', 'pajMe6y4I');
insert into users (firstName, email, description, locationId, userName, pass) values ('Mel', 'mwhiskera@nasa.gov', 'Nam dui.', 21, 'mduthiea', 'VscMoFhYqD');
insert into users (firstName, email, description, locationId, userName, pass) values ('Merrilee', 'mvanarsdaleb@last.fm', 'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 22, 'mbindonb', 'L6oFxu5');
insert into users (firstName, email, description, locationId, userName, pass) values ('Henderson', 'hordeltc@discuz.net', 'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.', 12, 'hcatheec', 'dG8cCA');
insert into users (firstName, email, description, locationId, userName, pass) values ('Gilberte', 'grizzid@microsoft.com', 'In eleifend quam a odio.', 48, 'glurrimand', 'rHI1J9');
insert into users (firstName, email, description, locationId, userName, pass) values ('Alli', 'aogborne@merriam-webster.com', 'Aenean sit amet justo.', 14, 'atommasie', 'IJHu4x');
insert into users (firstName, email, description, locationId, userName, pass) values ('Bentley', 'blampelf@google.de', 'Nulla justo.', 82, 'bpostansf', 'GV6JTe');
insert into users (firstName, email, description, locationId, userName, pass) values ('Lucio', 'lmesserg@twitpic.com', 'Duis aliquam convallis nunc.', 17, 'lantoniettig', 'kdPCd73');
insert into users (firstName, email, description, locationId, userName, pass) values ('Lotte', 'ledlinh@clickbank.net', 'Suspendisse accumsan tortor quis turpis.', 3, 'leassonh', 'Tn1U4G');
insert into users (firstName, email, description, locationId, userName, pass) values ('Shae', 'swhitelyi@wp.com', 'Duis at velit eu est congue elementum.', 35, 'spuzeyi', 'XqofKa');
insert into users (firstName, email, description, locationId, userName, pass) values ('Wallace', 'wmckellenj@quantcast.com', 'Pellentesque at nulla.', 34, 'wleasorj', 'AXPNdpdzGYRs');
insert into users (firstName, email, description, locationId, userName, pass) values ('Jaimie', 'jwinfredk@imdb.com', 'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 21, 'jstuehmeierk', '2OV8uPJr');
insert into users (firstName, email, description, locationId, userName, pass) values ('Verile', 'vkynettl@loc.gov', 'Aenean auctor gravida sem.', 10, 'vaynsleyl', 'sNSAQz9Q');
insert into users (firstName, email, description, locationId, userName, pass) values ('Marthena', 'mgaynesfordm@youtu.be', 'Proin interdum mauris non ligula pellentesque ultrices.', 39, 'mgeraghtym', 'shl3gr5mttD');
insert into users (firstName, email, description, locationId, userName, pass) values ('Lacee', 'lramsiern@cbc.ca', 'Suspendisse potenti.', 9, 'lgascoinen', '3c1abdstcZYS');
insert into users (firstName, email, description, locationId, userName, pass) values ('Bronny', 'bverilloo@nymag.com', 'Curabitur at ipsum ac tellus semper interdum.', 53, 'bmccritchieo', 'eKUQvTkqISVT');
insert into users (firstName, email, description, locationId, userName, pass) values ('Horacio', 'hrobersonp@chicagotribune.com', 'Duis aliquam convallis nunc.', 85, 'hgoingp', 'sSjy3hrRikM');
insert into users (firstName, email, description, locationId, userName, pass) values ('Bridget', 'bpolackq@hugedomains.com', 'Fusce consequat.', 95, 'brannq', 'dLj6LgloKl2');
insert into users (firstName, email, description, locationId, userName, pass) values ('Huey', 'hcausbyr@ocn.ne.jp', 'Praesent blandit lacinia erat.', 56, 'hgoodleyr', 'EAuf3Az');
insert into users (firstName, email, description, locationId, userName, pass) values ('Catha', 'ccardosos@cornell.edu', 'Praesent blandit.', 63, 'clahives', 'VSMnjO');
insert into users (firstName, email, description, locationId, userName, pass) values ('Ozzy', 'ojouent@vimeo.com', 'Morbi a ipsum.', 55, 'oambrogionit', 'ctMi8hUv');
insert into users (firstName, email, description, locationId, userName, pass) values ('Ellsworth', 'emclemonu@bravesites.com', 'In quis justo.', 26, 'egriffeu', '8x4HRyt8');
insert into users (firstName, email, description, locationId, userName, pass) values ('Staci', 'sgulvinv@cdbaby.com', 'Pellentesque ultrices mattis odio.', 14, 'sstarmontv', 'HSnlRN');
insert into users (firstName, email, description, locationId, userName, pass) values ('Hillary', 'hkirschew@infoseek.co.jp', 'Nulla facilisi.', 9, 'hquerreew', 'R0Dfcm');
insert into users (firstName, email, description, locationId, userName, pass) values ('Pammy', 'pcrocettox@1und1.de', 'Suspendisse potenti.', 11, 'pkrookx', 'Ba8zp1iP');
insert into users (firstName, email, description, locationId, userName, pass) values ('Florri', 'fgreavey@myspace.com', 'In quis justo.', 32, 'fboisey', 'Cp4ZhbTiH2');
insert into users (firstName, email, description, locationId, userName, pass) values ('Evy', 'emauroz@census.gov', 'Nam tristique tortor eu pede.', 41, 'eselesnickz', 'uADfk7I7b');
insert into users (firstName, email, description, locationId, userName, pass) values ('Pail', 'pambrodi10@patch.com', 'Curabitur in libero ut massa volutpat convallis.', 37, 'ptyt10', 'HplwdLRlmk');
insert into users (firstName, email, description, locationId, userName, pass) values ('Kariotta', 'kcourtese11@about.com', 'Nullam molestie nibh in lectus.', 54, 'kwhitwam11', '2k1PptoPbOa');
insert into users (firstName, email, description, locationId, userName, pass) values ('Sarina', 'smartell12@wordpress.com', 'In eleifend quam a odio.', 30, 'sdunkerley12', 'jRcTB3B8Y');
insert into users (firstName, email, description, locationId, userName, pass) values ('Phillida', 'pgleeton13@latimes.com', 'Aenean sit amet justo.', 23, 'pprobey13', 'Ko2vCPt');
insert into users (firstName, email, description, locationId, userName, pass) values ('Bettye', 'byoud14@technorati.com', 'Morbi ut odio.', 38, 'bsreenan14', 'am3SR0rESihm');
insert into users (firstName, email, description, locationId, userName, pass) values ('Otho', 'ovickors15@1und1.de', 'Duis bibendum.', 25, 'omackilpatrick15', 'yzYjLnEivV');
insert into users (firstName, email, description, locationId, userName, pass) values ('Pryce', 'pmccorkell16@nhs.uk', 'Maecenas rhoncus aliquam lacus.', 66, 'pfadden16', '88BOr0L');
insert into users (firstName, email, description, locationId, userName, pass) values ('Perri', 'ptavner17@csmonitor.com', 'In eleifend quam a odio.', 53, 'pwhitechurch17', 'hsTe0IcnL');
insert into users (firstName, email, description, locationId, userName, pass) values ('Mada', 'mbraysher18@nifty.com', 'In blandit ultrices enim.', 7, 'mraubheim18', 'dibahch');
insert into users (firstName, email, description, locationId, userName, pass) values ('Georas', 'gblagbrough19@tinyurl.com', 'Sed sagittis.', 52, 'gmatteuzzi19', 'VkFrhdvC');
insert into users (firstName, email, description, locationId, userName, pass) values ('Collie', 'ctabram1a@salon.com', 'Aenean sit amet justo.', 21, 'cdanels1a', '6lfzzZ');
insert into users (firstName, email, description, locationId, userName, pass) values ('Evangelin', 'ereis1b@ihg.com', 'Vestibulum ac est lacinia nisi venenatis tristique.', 59, 'egaze1b', 'k5r1RrHeNg');
insert into users (firstName, email, description, locationId, userName, pass) values ('Gustavo', 'gelliott1c@comcast.net', 'Phasellus id sapien in sapien iaculis congue.', 93, 'gmanhare1c', 'E5gVUGcYEMy');
insert into users (firstName, email, description, locationId, userName, pass) values ('Cindee', 'chagland1d@twitpic.com', 'Donec vitae nisi.', 88, 'ccargo1d', '55BSDwMq');
insert into users (firstName, email, description, locationId, userName, pass) values ('Basilio', 'bkenner1e@jimdo.com', 'Integer tincidunt ante vel ipsum.', 4, 'bellingham1e', 'Zz5k9aUg');
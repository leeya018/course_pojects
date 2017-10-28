     $(document).ready(function () {
            function createCategoryDiv(data) {
                var categoryDiv = $('<div>', { 'class':'categoryDiv' });
                var aRef = $('<a>',{href : '/'+data.id,'text': data.title});
                categoryDiv.append(aRef);
                $('body').append(categoryDiv);
                socket.emit('disconnect');

            }
            var socket = io.connect();
            socket.on('categories', function (data) {
                // console.log('Submitted: ' + data);
                for (var i = 0; i < data.length; i++) {
                    createCategoryDiv(data[i]);

                }

            });
        });
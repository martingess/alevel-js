function one() {
    console.log('one');

    function two() {
        console.log('two');

        function three() {
            console.log('three');

            function four() {
                console.log('four');
            }
            four();
        }
        three();
    }
    two();
}
one()
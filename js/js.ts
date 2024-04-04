function reset() {
    var ta = document.getElementById('ta');
    if (!ta.value || ta.value != ta.defaultValue && confirm('Are you sure?')) {
        ta.value = ta.defaultValue;
    }
}
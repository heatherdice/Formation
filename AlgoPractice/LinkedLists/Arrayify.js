function arrayify(head) {
    let ptr = head
    var array = []
    while (ptr != null) {
        array.push(ptr.val)
        ptr = ptr.next
    }
    return array
}

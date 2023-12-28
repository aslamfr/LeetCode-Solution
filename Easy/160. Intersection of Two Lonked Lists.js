var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;
    let a = headA, b = headB;
    while (a !== b) {
        a = !a ? headB : a.next;
        b = !b ? headA : b.next;
    } 
    return a;
};
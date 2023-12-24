var hasCycle = function(head) {
  fast = head;
  slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) return true;
  }
  return false;
};

// fast runner will catch upp with low runner in a looped track.
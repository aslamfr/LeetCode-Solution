function deleteDuplicates(head) {
  let list = head;

  while (list != null && list.next != null) {
    if (list.val == list.next.val) {
      list.next = list.next.next;
    } else {
      list = list.next;
    }
  }
  return head;
}

// learn more about linked list
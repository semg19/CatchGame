interface Observable {
  // observers:Array<Observer>;

  subscribe(o:Observer):void; //kan geen private, public of proteted toekennen.
  unsubscribe(o:Observer):void;
}
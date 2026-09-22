export class TinyQueue<T> {
  private data: T[] = [];
  constructor(private compare: (a: T, b: T) => number = (a: any, b: any) => (a < b ? -1 : a > b ? 1 : 0)) {}
  push(item: T) {
    this.data.push(item);
    this.up(this.data.length - 1);
  }
  pop(): T | undefined {
    const top = this.data[0];
    const last = this.data.pop();
    if (this.data.length && last !== undefined) {
      this.data[0] = last;
      this.down(0);
    }
    return top;
  }
  private up(i: number) {
    const d = this.data;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (this.compare(d[i], d[p]) >= 0) break;
      [d[i], d[p]] = [d[p], d[i]];
      i = p;
    }
  }
  private down(i: number) {
    const d = this.data;
    for (;;) {
      const l = 2 * i + 1, r = l + 1;
      let m = i;
      if (l < d.length && this.compare(d[l], d[m]) < 0) m = l;
      if (r < d.length && this.compare(d[r], d[m]) < 0) m = r;
      if (m === i) return;
      [d[i], d[m]] = [d[m], d[i]];
      i = m;
    }
  }
}

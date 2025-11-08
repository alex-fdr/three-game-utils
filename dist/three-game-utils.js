import { Box3 as l, Vector3 as f } from "three";
function p(t, n = {}) {
  const { position: o, rotation: e, scale: i, scaleFactor: r } = n;
  if (o) {
    const { x: s = 0, y: c = 0, z: a = 0 } = o;
    t.position.set(s, c, a);
  }
  if (e) {
    const { x: s = 0, y: c = 0, z: a = 0 } = e;
    t.rotation.set(s, c, a);
  }
  if (i) {
    const { x: s = 1, y: c = 1, z: a = 1 } = i;
    t.scale.set(s, c, a);
  }
  r && t.scale.multiplyScalar(r);
}
function m(t) {
  const n = new l().setFromObject(t), o = new f();
  return n.getSize(o), o;
}
function w(t, n) {
  let o, e;
  return (...i) => {
    e ? (clearTimeout(o), o = setTimeout(
      () => {
        Date.now() - e >= n && (t(...i), e = Date.now());
      },
      n - (Date.now() - e)
    )) : (t(...i), e = Date.now());
  };
}
export {
  p as applyTransform,
  m as getObjectSize,
  w as throttleTrailing
};

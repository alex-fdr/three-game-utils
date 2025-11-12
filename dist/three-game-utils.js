import { Box3 as u, Vector3 as f } from "three";
function w(t, n = {}) {
  const { position: e, rotation: o, scale: i, scaleFactor: a } = n;
  if (e) {
    const { x: c = 0, y: s = 0, z: r = 0 } = e;
    t.position.set(c, s, r);
  }
  if (o) {
    const { x: c = 0, y: s = 0, z: r = 0 } = o;
    t.rotation.set(c, s, r);
  }
  if (i) {
    const { x: c = 1, y: s = 1, z: r = 1 } = i;
    t.scale.set(c, s, r);
  }
  a && t.scale.multiplyScalar(a);
}
function h(t) {
  const n = new u().setFromObject(t), e = new f();
  return n.getSize(e), e;
}
function p(t = 1024) {
  const n = window.innerWidth / window.innerHeight;
  return n > 1 ? {
    width: t,
    height: Math.round(t / n)
  } : {
    width: Math.round(t * n),
    height: t
  };
}
function d(t, n) {
  let e, o;
  return (...i) => {
    o ? (clearTimeout(e), e = setTimeout(
      () => {
        Date.now() - o >= n && (t(...i), o = Date.now());
      },
      n - (Date.now() - o)
    )) : (t(...i), o = Date.now());
  };
}
export {
  w as applyTransform,
  h as getObjectSize,
  p as getScreenSize,
  d as throttleTrailing
};

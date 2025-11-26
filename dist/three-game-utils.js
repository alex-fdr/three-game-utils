import { Box3 as l, Vector3 as u } from "three";
function h(t, n = {}) {
  const { position: i, rotation: e, scale: o, scaleFactor: a } = n;
  if (i) {
    const { x: r = 0, y: c = 0, z: s = 0 } = i;
    t.position.set(r, c, s);
  }
  if (e) {
    const { x: r = 0, y: c = 0, z: s = 0 } = e;
    t.rotation.set(r, c, s);
  }
  if (o) {
    const { x: r = 1, y: c = 1, z: s = 1 } = o;
    t.scale.set(r, c, s);
  }
  a && t.scale.multiplyScalar(a);
}
function d(t) {
  const n = new l().setFromObject(t), i = new u();
  return n.getSize(i), i;
}
function y(t = 1024) {
  const n = window.innerWidth / window.innerHeight;
  return n > 1 ? {
    width: t,
    height: Math.round(t / n)
  } : {
    width: Math.round(t * n),
    height: t
  };
}
function z(t, n) {
  let i, e;
  return (...o) => {
    e ? (clearTimeout(i), i = setTimeout(
      () => {
        Date.now() - e >= n && (t(...o), e = Date.now());
      },
      n - (Date.now() - e)
    )) : (t(...o), e = Date.now());
  };
}
function p(t, n) {
  if (!f(t) || !f(n))
    return n;
  const i = { ...t };
  for (const e in n)
    f(n[e]) && e in t ? i[e] = p(t[e], n[e]) : i[e] = n[e];
  return i;
}
function f(t) {
  return t && typeof t == "object" && !Array.isArray(t);
}
export {
  h as applyTransform,
  p as deepMerge,
  d as getObjectSize,
  y as getScreenSize,
  z as throttleTrailing
};

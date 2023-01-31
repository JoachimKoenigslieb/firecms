import { jsx as n, jsxs as E, Fragment as Z } from "@emotion/react/jsx-runtime";
import { AdapterDateFns as Ma } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider as Pa } from "@mui/x-date-pickers/LocalizationProvider";
import $a from "@date-io/date-fns";
import * as Jo from "date-fns/locale";
import * as rn from "react";
import Q, { useState as M, useContext as Ye, useCallback as w, createContext as Zo, useEffect as z, useRef as he, createElement as Ga, useMemo as ie, useDeferredValue as on, useLayoutEffect as Nn, createRef as Oa, forwardRef as La } from "react";
import { Tooltip as de, Box as B, Typography as X, useTheme as Be, Chip as qo, Table as zt, TableBody as Ut, TableRow as yt, TableCell as Me, Divider as jt, Grid as oe, Skeleton as Ue, IconButton as ne, Link as Gt, CardMedia as Ya, lighten as et, darken as ye, Button as ae, FormHelperText as Ee, TextField as nt, FormControlLabel as pn, Switch as mn, FormControl as we, InputLabel as It, Select as Je, MenuItem as Ge, Checkbox as bn, ListItemText as an, Paper as St, FilledInput as Va, Accordion as Wa, AccordionSummary as za, AccordionDetails as Ua, InputAdornment as ja, TableContainer as Na, TextareaAutosize as Ha, Input as Xo, alpha as sn, Container as Ko, Portal as _a, CircularProgress as dt, OutlinedInput as Ja, Badge as Nr, Popover as ei, styled as Za, useMediaQuery as Oe, Menu as qa, ListItemIcon as Hr, Hidden as ti, Modal as Xa, Backdrop as Ka, Slide as Ar, Dialog as ur, DialogTitle as fr, DialogContent as gr, DialogContentText as ni, Alert as es, CardActionArea as ts, CardContent as ns, CardActions as rs, Fade as ri, Tab as Mn, Tabs as os, List as is, ListItem as as, Toolbar as oi, Breadcrumbs as ss, Avatar as _r, Drawer as ls, createTheme as cs, CssBaseline as Jr, ThemeProvider as ds } from "@mui/material";
import { UNSAFE_NavigationContext as As, useNavigate as hr, Link as Hn, useLocation as Nt, NavLink as ii, Route as tn, Routes as us, BrowserRouter as fs } from "react-router-dom";
import { useSnackbar as gs, SnackbarProvider as hs } from "notistack";
import pr from "@mui/icons-material/Error";
import { styled as We, alpha as _n, darken as Ot } from "@mui/material/styles";
import { tooltipClasses as Zr } from "@mui/material/Tooltip";
import * as ai from "@mui/icons-material";
import { CheckBox as ps, CheckBoxOutlineBlank as ms, KeyboardTab as bs, MoreVert as ws, Delete as Jn, FileCopy as vs, Add as ln, Phone as ys } from "@mui/icons-material";
import Ae from "react-fast-compare";
import xs from "@mui/icons-material/Close";
import qr from "object-hash";
import Es from "@mui/icons-material/Adjust";
import Bs from "@mui/icons-material/Functions";
import Cs from "@mui/icons-material/Crop75";
import ks from "@mui/icons-material/ShortText";
import Is from "@mui/icons-material/Subject";
import Ss from "@mui/icons-material/AddLink";
import Fs from "@mui/icons-material/List";
import Rs from "@mui/icons-material/Schedule";
import Ds from "@mui/icons-material/UploadFile";
import Qs from "@mui/icons-material/DriveFolderUpload";
import Xr from "@mui/icons-material/Repeat";
import Ts from "@mui/icons-material/ViewStream";
import Ms from "@mui/icons-material/ListAlt";
import Ps from "@mui/icons-material/Link";
import $s from "@mui/icons-material/Http";
import Gs from "@mui/icons-material/Flag";
import Os from "@mui/icons-material/Numbers";
import Kr from "@mui/icons-material/FormatListNumbered";
import Ls from "@mui/icons-material/FormatQuote";
import si from "@mui/icons-material/Email";
import Ys from "@mui/icons-material/BallotOutlined";
import qe from "@mui/icons-material/Clear";
import { FieldArray as Vs, Field as Ws, FastField as li, getIn as Zn, useFormikContext as zs, ErrorMessage as Us, Formik as ci, Form as di, setIn as js } from "formik";
import Ns from "@mui/icons-material/Add";
import Ai from "@mui/icons-material/Remove";
import Hs from "@mui/icons-material/DragHandle";
import { DragDropContext as ui, Droppable as fi, Draggable as gi } from "@hello-pangea/dnd";
import _s from "@mui/icons-material/InfoOutlined";
import { useDropzone as hi } from "react-dropzone";
import Js from "date-fns/format";
import Zs from "@mui/icons-material/DescriptionOutlined";
import Ht from "@mui/icons-material/OpenInNew";
import qs from "@mui/icons-material/ContentCopy";
import pi from "markdown-it";
import mr from "@mui/icons-material/KeyboardTab";
import { DatePicker as br } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker as wr } from "@mui/x-date-pickers/DateTimePicker";
import { getAuth as Se, onAuthStateChanged as Xs, signOut as Ks, GoogleAuthProvider as mi, signInWithPopup as eo, signInAnonymously as el, signInWithPhoneNumber as tl, OAuthProvider as to, FacebookAuthProvider as nl, GithubAuthProvider as rl, TwitterAuthProvider as ol, signInWithEmailAndPassword as il, createUserWithEmailAndPassword as al, fetchSignInMethodsForEmail as sl, RecaptchaVerifier as bi, getMultiFactorResolver as ll, PhoneMultiFactorGenerator as no, PhoneAuthProvider as ro } from "firebase/auth";
import { Timestamp as vr, getFirestore as Ke, collection as Qt, where as oo, orderBy as io, startAfter as cl, limit as dl, query as ao, getDoc as Al, doc as lt, getDocs as so, onSnapshot as lo, serverTimestamp as wi, setDoc as ul, deleteDoc as fl, getCountFromServer as gl, DocumentReference as hl, GeoPoint as pl } from "firebase/firestore";
import { getStorage as ml, uploadBytes as bl, ref as co, getDownloadURL as wl, getMetadata as vl } from "firebase/storage";
import yl from "@mui/icons-material/ExpandMore";
import yr, { Plugins as vi } from "react-markdown-editor-lite";
import qn from "@mui/icons-material/ArrowBack";
import xl from "@mui/icons-material/PersonOutline";
import { initializeApp as El } from "firebase/app";
import * as Fe from "yup";
import Bl from "@mui/icons-material/ArrowForward";
import Cl from "@mui/icons-material/Assignment";
import { FixedSizeList as kl } from "react-window";
import yi from "react-use-measure";
import Ao from "@mui/icons-material/ArrowUpward";
import Il from "@mui/icons-material/ArrowDownward";
import Sl from "@mui/icons-material/ArrowDropDownCircle";
import xi from "@mui/material/Tooltip/Tooltip";
import { LoadingButton as Fl } from "@mui/lab";
import Rl from "@mui/material/Select";
import Ei from "@mui/material/InputBase";
import Dl from "@mui/material/MenuItem";
import { grey as uo, pink as Ql, red as Tl } from "@mui/material/colors";
import Ml from "@mui/icons-material/CalendarToday";
import { createElement as Pl } from "@emotion/react";
import $l from "@mui/icons-material/GetApp";
import Gl from "@mui/icons-material/Menu";
import fo from "@mui/material/IconButton";
import Ol from "@mui/icons-material/ChevronLeft";
import Ll from "@mui/icons-material/ChevronRight";
import Yl from "@mui/icons-material/LightModeOutlined";
import Vl from "@mui/icons-material/DarkModeOutlined";
import Wl from "@mui/icons-material/NavigateNext";
import zl from "clsx";
import Ul from "react-image-file-resizer";
import go from "@mui/material/Button";
import jl from "@mui/material/Dialog";
import Nl from "@mui/material/DialogContent";
import ho from "@mui/material/DialogContentText";
import Hl from "@mui/material/DialogTitle";
import _l from "@mui/icons-material/Edit";
import { styled as Bi } from "@mui/system";
import Jl from "@mui/icons-material/ErrorOutline";
import Zl from "@mui/icons-material/RemoveCircle";
import ql from "@mui/icons-material/Search";
import Xl from "@mui/icons-material/FilterListOff";
const Kl = {
  breadcrumbs: [],
  set: (e) => {
  }
}, Ci = Q.createContext(Kl), ec = ({ children: e }) => {
  const [t, r] = M([]), i = (a) => {
    r(a.breadcrumbs);
  };
  return /* @__PURE__ */ n(
    Ci.Provider,
    {
      value: {
        breadcrumbs: t,
        set: i
      },
      children: e
    }
  );
}, tc = {
  mode: "light",
  setMode: (e) => {
  },
  toggleMode: () => {
  }
}, xr = Q.createContext(tc), nc = xr.Provider;
function Ce(e) {
  return rc(oc(e));
}
function rc(e) {
  return e.startsWith("/") ? e.slice(1) : e;
}
function oc(e) {
  return e.endsWith("/") ? e.slice(0, -1) : e;
}
function Dg(e) {
  return e.startsWith("/") ? e : `/${e}`;
}
function Qg(e) {
  const t = Ce(e);
  if (t.includes("/")) {
    const r = t.split("/");
    return r[r.length - 1];
  }
  return t;
}
function ki(e, t) {
  const r = Ce(e), i = r.split("/");
  if (i.length % 2 === 0)
    throw Error(`Collection paths must have an odd number of segments: ${e}`);
  const a = t.find((s) => s.alias === i[0]);
  let o;
  if (a && (o = a.path), i.length > 1) {
    const s = Er(o ?? i[0], t);
    if (!s?.subcollections)
      return r;
    const l = r.split("/").slice(2).join("/");
    return (o ?? i[0]) + "/" + i[1] + "/" + ki(l, s.subcollections);
  } else
    return o ?? r;
}
function Er(e, t) {
  const r = Ce(e).split("/");
  if (r.length % 2 === 0)
    throw Error(`Collection paths must have an odd number of segments: ${e}`);
  const i = Ii(r);
  let a;
  for (let o = 0; o < i.length; o++) {
    const s = i[o], l = t && t.sort((c, d) => (c.alias ?? "").localeCompare(d.alias ?? "")).find((c) => c.alias === s || c.path === s);
    if (l) {
      if (s === e)
        a = l;
      else if (l.subcollections) {
        const c = e.replace(s, "").split("/").slice(2).join("/");
        c.length > 0 && (a = Er(c, l.subcollections));
      }
    }
    if (a)
      break;
  }
  return a;
}
function Ii(e) {
  const t = e.length > 0 && e.length % 2 === 0 ? e.splice(0, e.length - 1) : e, r = t.length, i = [];
  for (let a = r; a > 0; a = a - 2)
    i.push(t.slice(0, a).join("/"));
  return i;
}
function Br(e) {
  const {
    path: t,
    collections: r = [],
    currentFullPath: i
  } = e, a = Ce(t).split("/"), o = Ii(a), s = [];
  for (let l = 0; l < o.length; l++) {
    const c = o[l], d = r && r.find((A) => A.alias === c || A.path === c);
    if (d) {
      const A = d.alias ?? d.path, u = i && i.length > 0 ? i + "/" + A : A;
      s.push({
        type: "collection",
        path: u,
        collection: d
      });
      const p = Ce(Ce(t).replace(c, "")), h = p.length > 0 ? p.split("/") : [];
      if (h.length > 0) {
        const f = h[0], g = u + "/" + f;
        if (s.push({
          type: "entity",
          entityId: f,
          path: u,
          parentCollection: d
        }), h.length > 1) {
          const m = h.slice(1).join("/");
          if (!d)
            throw Error("collection not found resolving path: " + d);
          const v = d.views, b = v && v.find((x) => x.path === m);
          if (b) {
            const x = i && i.length > 0 ? i + "/" + b.path : b.path;
            s.push({
              type: "custom_view",
              path: x,
              view: b
            });
          } else
            d.subcollections && s.push(...Br({
              path: m,
              customViews: v,
              collections: d.subcollections,
              currentFullPath: g
            }));
        }
      }
      break;
    }
  }
  return s;
}
const bt = "100vw", nn = "53vw", cn = "600px", Si = Q.createContext({}), Ve = () => Ye(Si), Fi = Q.createContext({}), Ie = () => Ye(Fi), Ri = Q.createContext({}), Ft = () => Ye(Ri), Di = Q.createContext({}), wn = () => Ye(Di), Qi = Q.createContext({}), At = () => Ye(Qi), Ti = Q.createContext({}), _t = () => Ye(Ti), rt = () => {
  const {
    enqueueSnackbar: e,
    closeSnackbar: t
  } = gs();
  return {
    open: w((i) => {
      const {
        type: a,
        message: o
      } = i;
      e(o, {
        variant: a
      });
    }, []),
    close: t
  };
}, Mi = Q.createContext(void 0), Pi = () => Ye(Mi), $i = Zo({
  sideDialogsController: {},
  sideEntityController: {},
  navigation: {},
  dataSource: {},
  storageSource: {},
  authController: {},
  snackbarController: {},
  fields: {}
}), re = () => {
  const e = Ye($i), t = Ft(), r = wn(), i = At(), a = Ie(), o = Ve(), s = _t(), l = rt(), c = Pi();
  return {
    ...e,
    authController: t,
    sideDialogsController: r,
    sideEntityController: i,
    navigation: a,
    dataSource: o,
    storageSource: s,
    snackbarController: l,
    userConfigPersistence: c
  };
};
function ic({
  path: e,
  collection: t,
  filterValues: r,
  sortBy: i,
  itemCount: a,
  searchString: o
}) {
  const s = Ve(), c = Ie().resolveAliasesFrom(e), d = i ? i[0] : void 0, A = i ? i[1] : void 0, u = re(), [p, h] = M([]), [f, g] = M(!1), [m, v] = M(), [b, x] = M(!1);
  return z(() => {
    g(!0);
    const y = async (I) => {
      if (t.callbacks?.onFetch)
        try {
          I = await Promise.all(
            I.map((C) => t.callbacks.onFetch({
              collection: t,
              path: c,
              entity: C,
              context: u
            }))
          );
        } catch (C) {
          console.error(C);
        }
      g(!1), v(void 0), h(I), x(!a || I.length < a);
    }, k = (I) => {
      console.error("ERROR", I), g(!1), h([]), v(I);
    };
    return s.listenCollection ? s.listenCollection({
      path: c,
      collection: t,
      onUpdate: y,
      onError: k,
      searchString: o,
      filter: r,
      limit: a,
      startAfter: void 0,
      orderBy: d,
      order: A
    }) : (s.fetchCollection({
      path: c,
      collection: t,
      searchString: o,
      filter: r,
      limit: a,
      startAfter: void 0,
      orderBy: d,
      order: A
    }).then(y).catch(k), () => {
    });
  }, [c, a, A, d, r, o]), {
    data: p,
    dataLoading: f,
    dataLoadingError: m,
    noMoreToLoad: b
  };
}
const Pn = {};
function Cr({
  path: e,
  entityId: t,
  collection: r,
  useCache: i = !1
}) {
  const a = Ve(), s = Ie().resolveAliasesFrom(e), l = re(), [c, d] = M(), [A, u] = M(!0), [p, h] = M();
  return z(() => {
    u(!0);
    const f = async (m) => {
      if (r.callbacks?.onFetch && m)
        try {
          m = await r.callbacks.onFetch({
            collection: r,
            path: s,
            entity: m,
            context: l
          });
        } catch (v) {
          console.error(v);
        }
      Pn[`${s}/${t}`] = m, d(m), u(!1), h(void 0);
    }, g = (m) => {
      console.error("ERROR fetching entity", m), u(!1), d(void 0), h(m);
    };
    return t && i && Pn[`${s}/${t}`] ? (d(Pn[`${s}/${t}`]), u(!1), h(void 0), () => {
    }) : t && s && r ? a.listenEntity ? a.listenEntity({
      path: s,
      entityId: t,
      collection: r,
      onUpdate: f,
      onError: g
    }) : (a.fetchEntity({
      path: s,
      entityId: t,
      collection: r
    }).then(f).catch(g), () => {
    }) : (f(void 0), () => {
    });
  }, [t, s]), {
    entity: c,
    dataLoading: A,
    dataLoadingError: p
  };
}
async function Gi({
  collection: e,
  path: t,
  entityId: r,
  values: i,
  previousValues: a,
  status: o,
  dataSource: s,
  context: l,
  onSaveSuccess: c,
  onSaveFailure: d,
  onPreSaveHookError: A,
  onSaveSuccessHookError: u
}) {
  let p;
  const h = l.navigation.resolveAliasesFrom(t), f = e.callbacks;
  if (f?.onPreSave)
    try {
      const g = ke({
        collection: e,
        path: t,
        values: a,
        entityId: r,
        fields: l.fields
      });
      p = await f.onPreSave({
        collection: g,
        path: t,
        resolvedPath: h,
        entityId: r,
        values: i,
        previousValues: a,
        status: o,
        context: l
      });
    } catch (g) {
      console.error(g), A && A(g);
      return;
    }
  else
    p = i;
  return s.saveEntity({
    collection: e,
    path: h,
    entityId: r,
    values: p,
    previousValues: a,
    status: o
  }).then((g) => {
    try {
      if (f?.onSaveSuccess) {
        const m = ke({
          collection: e,
          path: t,
          values: p,
          entityId: r,
          fields: l.fields
        });
        f.onSaveSuccess({
          collection: m,
          path: t,
          resolvedPath: h,
          entityId: g.id,
          values: p,
          previousValues: a,
          status: o,
          context: l
        });
      }
    } catch (m) {
      u && u(m);
    }
    c && c(g);
  }).catch((g) => {
    if (f?.onSaveFailure) {
      const m = ke({
        collection: e,
        path: t,
        values: p,
        entityId: r,
        fields: l.fields
      });
      f.onSaveFailure({
        collection: m,
        path: t,
        resolvedPath: h,
        entityId: r,
        values: p,
        previousValues: a,
        status: o,
        context: l
      });
    }
    d && d(g);
  });
}
async function ac({
  dataSource: e,
  entity: t,
  collection: r,
  callbacks: i,
  onDeleteSuccess: a,
  onDeleteFailure: o,
  onPreDeleteHookError: s,
  onDeleteSuccessHookError: l,
  context: c
}) {
  console.debug("Deleting entity", t.path, t.id);
  const d = {
    entity: t,
    collection: r,
    entityId: t.id,
    path: t.path,
    context: c
  };
  if (i?.onPreDelete)
    try {
      await i.onPreDelete(d);
    } catch (A) {
      return console.error(A), s && s(t, A), !1;
    }
  return e.deleteEntity({
    entity: t
  }).then(() => {
    a && a(t);
    try {
      return i?.onDelete && i.onDelete(d), !0;
    } catch (A) {
      return l && l(t, A), !1;
    }
  }).catch((A) => (o && o(t, A), !1));
}
function Te({
  property: e,
  value: t,
  setValue: r
}) {
  const i = he(null);
  z(() => {
    typeof e.disabled == "object" && Boolean(e.disabled.clearOnDisabled) ? t != null && (i.current = t, r(null)) : i.current && (r(i.current), i.current = null);
  }, [e]);
}
function sc({
  path: e,
  context: t
}) {
  const r = t.dataSource, i = t.navigation;
  if (!i)
    throw Error("Calling getNavigationFrom, but main navigation has not yet been initialised");
  const o = Br({
    path: e,
    collections: i.collections ?? []
  }).map((s) => {
    if (s.type === "collection")
      return Promise.resolve(s);
    if (s.type === "entity") {
      const l = i.getCollection(s.path, s.entityId);
      if (!l)
        throw Error(`No collection defined in the navigation for the entity with path ${s.path}`);
      return r.fetchEntity({
        path: s.path,
        entityId: s.entityId,
        collection: l
      }).then((c) => {
        if (c)
          return { ...s, entity: c };
      });
    } else {
      if (s.type === "custom_view")
        return Promise.resolve(s);
      throw Error("Unmapped element in useEntitiesFromPath");
    }
  }).filter((s) => Boolean(s));
  return Promise.all(o);
}
function Tg({
  path: e
}) {
  const t = re(), [r, i] = M(), [a, o] = M(!1), [s, l] = M();
  return z(() => {
    t.navigation && (o(!0), l(void 0), sc({ path: e, context: t }).then((d) => {
      i(d);
    }).catch((d) => l(d)).finally(() => o(!1)));
  }, [e, t]), t.navigation ? { data: r, dataLoading: a, dataLoadingError: s } : { dataLoading: !0 };
}
const kr = () => Ye(xr), lc = (e) => {
  const { onSuccess: t, onError: r, disableClipboardAPI: i = !1, copiedDuration: a } = e || {}, o = he(null), [s, l] = M(!1), [c, d] = M("");
  z(() => {
    a && setTimeout(() => l(!1), a);
  }, [s]);
  const A = () => navigator.clipboard !== void 0, u = w((b) => {
    if (r)
      r(b);
    else
      throw new Error(b);
  }, [r]), p = w((b) => {
    t && t(b), l(!0), d(b);
  }, [t]), h = w((b) => {
    navigator.clipboard.writeText(b).then(() => p(b)).catch((x) => {
      u(x), l(!1);
    });
  }, [u, p]), f = () => {
    A() && navigator.clipboard.writeText("");
  }, g = (b) => v("copy", typeof b == "object" ? void 0 : b), m = () => v("cut"), v = w(
    (b = "copy", x) => {
      const y = o.current, k = y && (y.tagName === "INPUT" || y.tagName === "TEXTAREA"), I = o.current;
      A() && !i && (x ? h(x) : y ? k ? (h(I.value), b === "cut" && (I.value = "")) : h(y.innerText) : u("Both the ref & text were undefined"));
    },
    [i, h, u]
  );
  return {
    ref: o,
    isCoppied: s,
    clipboard: c,
    clearClipboard: f,
    isSupported: A,
    copy: g,
    cut: m
  };
}, Ir = () => Ye(Ci);
function Sr(e) {
  const t = Ie(), r = wn(), i = w(() => {
    if (e.path) {
      let o = e.collection;
      if (o || (o = t.getCollection(e.path)), !o)
        throw Error("Not able to resolve the collection in useReferenceDialog");
      r.open({
        key: `reference_${e.path}`,
        component: /* @__PURE__ */ n(
          qA,
          {
            ...e,
            collection: o
          }
        ),
        width: "90vw"
      });
    } else
      throw Error("useReferenceDialog: You are trying to open a reference dialog, but have not declared the `path`");
  }, [t, e, r]), a = w(() => {
    r.close();
  }, [r]);
  return {
    open: i,
    close: a
  };
}
const cc = `data:image/png;base64,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
`;
function dc(e, t) {
  z(() => {
    if (document) {
      document.title = `${e} - FireCMS`;
      let r = document.querySelector("link[rel~='icon']");
      r || (r = document.createElement("link"), r.rel = "icon", document.getElementsByTagName("head")[0].appendChild(r)), r.href = t ?? cc;
    }
  }, [e, t]);
}
const Oi = We(({
  className: e,
  ...t
}) => /* @__PURE__ */ n(de, { ...t, classes: { popper: e } }))(({ theme: e }) => ({
  [`& .${Zr.tooltip}`]: {
    margin: "0 8px",
    backgroundColor: e.palette.error.light
  },
  [`& .${Zr.arrow}`]: {
    color: e.palette.error.light
  }
}));
function xe({
  title: e,
  error: t,
  tooltip: r
}) {
  const i = t instanceof Error ? t.message : t, a = /* @__PURE__ */ E(
    B,
    {
      sx: {
        display: "flex",
        alignItems: "center",
        margin: 1
      },
      children: [
        /* @__PURE__ */ n(pr, { fontSize: "small", color: "error" }),
        /* @__PURE__ */ E(B, { sx: {
          paddingLeft: 2
        }, children: [
          e && /* @__PURE__ */ n(
            X,
            {
              variant: "body2",
              sx: {
                fontWeight: "500"
              },
              children: e
            }
          ),
          /* @__PURE__ */ n(X, { variant: "body2", children: i })
        ] })
      ]
    }
  );
  return r ? /* @__PURE__ */ n(Oi, { title: r, children: a }) : a;
}
class ut {
  id;
  path;
  constructor(t, r) {
    this.id = t, this.path = r;
  }
  get pathWithId() {
    return `${this.path}/${this.id}`;
  }
}
class dn {
  latitude;
  longitude;
  constructor(t, r) {
    this.latitude = t, this.longitude = r;
  }
}
function Re(e) {
  const t = re();
  let r;
  const {
    property: i,
    propertyKey: a,
    value: o,
    size: s,
    height: l,
    width: c,
    entity: d
  } = e, A = $e({
    propertyOrBuilder: i,
    propertyValue: o,
    fields: t.fields
  });
  if (o === void 0 || A === null)
    r = /* @__PURE__ */ n(Tt, {});
  else if (A.Preview)
    r = Ga(
      A.Preview,
      {
        propertyKey: a,
        value: o,
        property: A,
        size: s,
        height: l,
        width: c,
        entity: d,
        customProps: A.customProps
      }
    );
  else if (o === null)
    r = /* @__PURE__ */ n(Tt, {});
  else if (A.dataType === "string") {
    const u = A;
    typeof o == "string" ? u.url ? typeof u.url == "boolean" ? r = /* @__PURE__ */ n(
      Kn,
      {
        size: e.size,
        url: o
      }
    ) : typeof u.url == "string" && (r = /* @__PURE__ */ n(
      Kn,
      {
        size: e.size,
        url: o,
        previewType: u.url
      }
    )) : u.storage ? r = /* @__PURE__ */ n(
      $c,
      {
        storeUrl: A.storage?.storeUrl ?? !1,
        size: e.size,
        storagePathOrDownloadUrl: o
      }
    ) : u.markdown ? r = /* @__PURE__ */ n(Qr, { source: o }) : r = /* @__PURE__ */ n(
      Wi,
      {
        ...e,
        property: u,
        value: o
      }
    ) : r = st(a, A.dataType, o);
  } else if (A.dataType === "array")
    if (o instanceof Array) {
      const u = A;
      if (!u.of && !u.oneOf)
        throw Error(`You need to specify an 'of' or 'oneOf' prop (or specify a custom field) in your array property ${a}`);
      u.of ? Array.isArray(u.of) ? r = /* @__PURE__ */ n(
        bo,
        {
          ...e,
          value: o,
          property: A
        }
      ) : u.of.dataType === "map" ? r = /* @__PURE__ */ n(
        hc,
        {
          propertyKey: a,
          property: A,
          value: o,
          entity: d,
          size: s
        }
      ) : u.of.dataType === "reference" ? typeof u.of.path == "string" ? r = /* @__PURE__ */ n(
        wc,
        {
          ...e,
          value: o,
          property: A
        }
      ) : r = /* @__PURE__ */ n(Tt, {}) : u.of.dataType === "string" ? u.of.enumValues ? r = /* @__PURE__ */ n(
        po,
        {
          ...e,
          value: o,
          property: A
        }
      ) : u.of.storage ? r = /* @__PURE__ */ n(
        bc,
        {
          ...e,
          value: o,
          property: A
        }
      ) : r = /* @__PURE__ */ n(
        gc,
        {
          ...e,
          value: o,
          property: A
        }
      ) : u.of.dataType === "number" && u.of.enumValues ? r = /* @__PURE__ */ n(
        po,
        {
          ...e,
          value: o,
          property: A
        }
      ) : r = /* @__PURE__ */ n(
        bo,
        {
          ...e,
          value: o,
          property: A
        }
      ) : u.oneOf && (r = /* @__PURE__ */ n(
        xc,
        {
          ...e,
          value: o,
          property: A
        }
      ));
    } else
      r = st(a, A.dataType, o);
  else
    A.dataType === "map" ? typeof o == "object" ? r = /* @__PURE__ */ n(
      vc,
      {
        ...e,
        property: A
      }
    ) : r = st(a, A.dataType, o) : A.dataType === "date" ? o instanceof Date ? r = /* @__PURE__ */ n(Mc, { date: o }) : r = st(a, A.dataType, o) : A.dataType === "reference" ? typeof A.path == "string" ? o instanceof ut ? r = /* @__PURE__ */ n(
      Lt,
      {
        disabled: !A.path,
        previewProperties: A.previewProperties,
        size: e.size,
        onClick: e.onClick,
        reference: o
      }
    ) : r = st(a, A.dataType, o) : r = /* @__PURE__ */ n(Tt, {}) : A.dataType === "boolean" ? typeof o == "boolean" ? r = /* @__PURE__ */ n(Yc, { value: o }) : r = st(a, A.dataType, o) : A.dataType === "number" ? typeof o == "number" ? r = /* @__PURE__ */ n(
      pc,
      {
        ...e,
        value: o,
        property: A
      }
    ) : r = st(a, A.dataType, o) : r = JSON.stringify(o);
  return r ?? /* @__PURE__ */ n(Tt, {});
}
function st(e, t, r) {
  return console.error(`Unexpected value for property ${e}, of type ${t}`, r), /* @__PURE__ */ n(
    xe,
    {
      title: "Unexpected value",
      error: `${JSON.stringify(r)}`
    }
  );
}
function Li(e) {
  let t = 0, r, i;
  for (r = 0; r < e.length; r++)
    i = e.charCodeAt(r), t = (t << 5) - t + i, t |= 0;
  return Math.abs(t);
}
const Xn = {
  blueLighter: { color: "#cfdfff", text: "#102046" },
  cyanLighter: { color: "#d0f0fd", text: "#04283f" },
  tealLighter: { color: "#c2f5e9", text: "#012524" },
  greenLighter: { color: "#d1f7c4", text: "#0b1d05" },
  yellowLighter: { color: "#ffeab6", text: "#3b2501" },
  orangeLighter: { color: "#fee2d5", text: "#6b2613" },
  redLighter: { color: "#ffdce5", text: "#4c0c1c" },
  pinkLighter: { color: "#ffdaf6", text: "#400832" },
  purpleLighter: { color: "#ede2fe", text: "#280b42" },
  grayLighter: { color: "#eee", text: "#040404" },
  blueLight: { color: "#9cc7ff", text: "#102046" },
  cyanLight: { color: "#77d1f3", text: "#04283f" },
  tealLight: { color: "#72ddc3", text: "#012524" },
  greenLight: { color: "#93e088", text: "#0b1d05" },
  yellowLight: { color: "#ffd66e", text: "#3b2501" },
  orangeLight: { color: "#ffa981", text: "#6b2613" },
  redLight: { color: "#ff9eb7", text: "#4c0c1c" },
  pinkLight: { color: "#f99de2", text: "#400832" },
  purpleLight: { color: "#cdb0ff", text: "#280b42" },
  grayLight: { color: "#ccc", text: "#040404" },
  blueDark: { color: "#2d7ff9", text: "#fff" },
  cyanDark: { color: "#18bfff", text: "#fff" },
  tealDark: { color: "#20d9d2", text: "#fff" },
  greenDark: { color: "#20c933", text: "#fff" },
  yellowDark: { color: "#fcb400", text: "#fff" },
  orangeDark: { color: "#ff6f2c", text: "#fff" },
  redDark: { color: "#f82b60", text: "#fff" },
  pinkDark: { color: "#ff08c2", text: "#fff" },
  purpleDark: { color: "#8b46ff", text: "#fff" },
  grayDark: { color: "#666", text: "#fff" },
  blueDarker: { color: "#2750ae", text: "#cfdfff" },
  cyanDarker: { color: "#0b76b7", text: "#d0f0fd" },
  tealDarker: { color: "#06a09b", text: "#c2f5e9" },
  greenDarker: { color: "#338a17", text: "#d1f7c4" },
  yellowDarker: { color: "#b87503", text: "#ffeab6" },
  orangeDarker: { color: "#d74d26", text: "#fee2d5" },
  redDarker: { color: "#ba1e45", text: "#ffdce5" },
  pinkDarker: { color: "#b2158b", text: "#ffdaf6" },
  purpleDarker: { color: "#6b1cb0", text: "#ede2fe" },
  grayDarker: { color: "#444", text: "#eee" }
};
function Fr(e) {
  const t = Li(e), r = Object.keys(Xn), i = t % r.length;
  return Xn[r[i]];
}
function vn(e) {
  return Array.isArray(e) ? e : Object.entries(e).map(([t, r]) => typeof r == "string" ? {
    id: t,
    label: r
  } : {
    ...r,
    id: t
  });
}
function Yi(e, t) {
  if (t)
    return e.find((r) => r.id === t);
}
function Ac(e, t) {
  const r = Yi(e, t);
  if (!r?.color)
    return Fr(t.toString());
  if (typeof r == "object" && "color" in r) {
    if (typeof r.color == "string")
      return Xn[r.color];
    if (typeof r.color == "object")
      return r.color;
  }
}
function An(e) {
  return typeof e == "object" && e.disabled;
}
function uc(e) {
  if (e !== void 0)
    return typeof e == "object" ? e.label : e;
}
function Le({
  enumValues: e,
  enumKey: t,
  small: r
}) {
  if (!e)
    return null;
  const i = vn(e), a = t !== void 0 ? Yi(i, t) : void 0, o = uc(a), s = Ac(i, t);
  return /* @__PURE__ */ n(
    Vi,
    {
      colorScheme: s,
      label: o !== void 0 ? o : t,
      error: !o,
      outlined: !1,
      small: r
    }
  );
}
function Vi({
  label: e,
  colorScheme: t,
  error: r,
  outlined: i,
  small: a
}) {
  const o = Be(), s = t ?? Fr(e);
  return /* @__PURE__ */ n(
    qo,
    {
      sx: {
        maxWidth: "100%",
        backgroundColor: r || !s ? "#eee" : s.color,
        color: r || !s ? "red" : s.text,
        fontWeight: o.typography.fontWeightRegular
      },
      size: a ? "small" : "medium",
      variant: i ? "outlined" : "filled",
      label: e
    }
  );
}
function Wi({
  propertyKey: e,
  value: t,
  property: r,
  size: i
}) {
  if (r.enumValues) {
    const a = t, o = ia(r);
    return /* @__PURE__ */ n(
      Le,
      {
        enumKey: a,
        enumValues: o.enumValues,
        small: i !== "regular"
      }
    );
  } else if (r.previewAsTag) {
    const a = Fr(e ?? "");
    return /* @__PURE__ */ n(ue, { children: /* @__PURE__ */ n(
      Vi,
      {
        colorScheme: a,
        label: t,
        small: i !== "regular"
      }
    ) });
  } else
    return t && t.includes(`
`) ? /* @__PURE__ */ n("div", { children: t.split(`
`).map((a, o) => /* @__PURE__ */ n("div", { children: a }, `string_preview_${o}`)) }) : /* @__PURE__ */ n(Z, { children: t });
}
const $n = "ArrayOfStringsPreview", Pt = {
  array: `${$n}-array`,
  arrayWrap: `${$n}-arrayWrap`,
  arrayItem: `${$n}-arrayItem`
}, fc = We("div")(({ theme: e }) => ({
  [`& .${Pt.array}`]: {
    display: "flex",
    flexDirection: "column"
  },
  [`& .${Pt.arrayWrap}`]: {
    display: "flex",
    flexWrap: "wrap"
  },
  [`& .${Pt.arrayItem}`]: {
    margin: e.spacing(0.5)
  }
}));
function gc({
  propertyKey: e,
  value: t,
  property: r,
  entity: i,
  size: a
}) {
  const o = re(), s = ft({
    property: r,
    propertyValue: t,
    fields: o.fields
  });
  if (Array.isArray(s.of))
    throw Error("Using array properties instead of single one in `of` in ArrayProperty");
  if (!s.of || s.dataType !== "array" || s.of.dataType !== "string")
    throw Error("Picked wrong preview component ArrayOfStringsPreview");
  if (t && !Array.isArray(t))
    return /* @__PURE__ */ n(fc, { children: `Unexpected value: ${t}` });
  const l = s.of;
  return /* @__PURE__ */ n("div", { className: Pt.array, children: t && t.map(
    (c, d) => /* @__PURE__ */ n(
      "div",
      {
        className: Pt.arrayItem,
        children: /* @__PURE__ */ n(ue, { children: /* @__PURE__ */ n(
          Wi,
          {
            propertyKey: e,
            property: l,
            value: c,
            entity: i,
            size: a
          }
        ) })
      },
      `preview_array_strings_${e}_${d}`
    )
  ) });
}
function Rr({
  name: e,
  value: t,
  enumValues: r,
  size: i
}) {
  return /* @__PURE__ */ n(B, { sx: (a) => ({
    display: "flex",
    flexWrap: "wrap",
    gap: a.spacing(0.5)
  }), children: t && t.map(
    (a, o) => /* @__PURE__ */ n(
      ue,
      {
        children: /* @__PURE__ */ n(
          Le,
          {
            enumKey: a,
            enumValues: r,
            small: i !== "regular"
          }
        )
      },
      `preview_array_ref_${e}_${o}`
    )
  ) });
}
function po({
  propertyKey: e,
  value: t,
  property: r,
  size: i
}) {
  if (r.dataType !== "array")
    throw Error("Picked wrong preview component ArrayEnumPreview");
  const a = r.of;
  if (!a.enumValues)
    throw Error("Picked wrong preview component ArrayEnumPreview");
  return t ? /* @__PURE__ */ n(
    Rr,
    {
      name: e,
      value: t,
      enumValues: a.enumValues,
      size: i
    }
  ) : null;
}
function hc({
  propertyKey: e,
  value: t,
  property: r,
  size: i,
  entity: a
}) {
  const o = re(), s = ft({
    property: r,
    propertyValue: t,
    fields: o.fields
  });
  if (Array.isArray(s?.of))
    throw Error("Using array properties instead of single one in `of` in ArrayProperty");
  if (s?.dataType !== "array" || !s.of || s.of.dataType !== "map")
    throw Error("Picked wrong preview component ArrayOfMapsPreview");
  const l = s.of, c = l.properties;
  if (!c)
    throw Error(`You need to specify a 'properties' prop (or specify a custom field) in your map property ${e}`);
  const d = t, A = l.previewProperties;
  if (!d)
    return null;
  let u = A;
  return (!u || !u.length) && (u = Object.keys(c), i && (u = u.slice(0, 3))), /* @__PURE__ */ n(zt, { size: "small", children: /* @__PURE__ */ n(Ut, { children: d && d.map((p, h) => /* @__PURE__ */ n(
    yt,
    {
      sx: {
        "&:last-child th, &:last-child td": {
          borderBottom: 0
        }
      },
      children: u && u.map(
        (f) => /* @__PURE__ */ n(
          Me,
          {
            component: "th",
            children: /* @__PURE__ */ n(ue, { children: /* @__PURE__ */ n(
              Re,
              {
                propertyKey: f,
                value: p[f],
                property: c[f],
                entity: a,
                size: "small"
              }
            ) })
          },
          `table-cell-${f}`
        )
      )
    },
    `table_${p}_${h}`
  )) }) });
}
function pc({
  value: e,
  property: t,
  size: r
}) {
  if (t.enumValues) {
    const i = e, a = xn(t.enumValues);
    return a ? /* @__PURE__ */ n(
      Le,
      {
        enumKey: i,
        enumValues: a,
        small: r !== "regular"
      }
    ) : /* @__PURE__ */ n(Z, { children: e });
  } else
    return /* @__PURE__ */ n(Z, { children: e });
}
const mo = "ArrayOfStorageComponentsPreview", un = {
  arrayWrap: `${mo}-arrayWrap`,
  arrayItem: `${mo}-arrayItem`
}, mc = We("div")(({ theme: e }) => ({
  [`&.${un.arrayWrap}`]: {
    display: "flex",
    flexWrap: "wrap"
  },
  [`& .${un.arrayItem}`]: {
    margin: e.spacing(0.5)
  }
}));
function bc({
  propertyKey: e,
  entity: t,
  value: r,
  property: i,
  size: a
}) {
  const o = re(), s = ft({
    property: i,
    propertyValue: r,
    fields: o.fields
  });
  if (Array.isArray(s.of))
    throw Error("Using array properties instead of single one in `of` in ArrayProperty");
  if (s.dataType !== "array" || !s.of || s.of.dataType !== "string")
    throw Error("Picked wrong preview component ArrayOfStorageComponentsPreview");
  const l = a === "regular" ? "small" : "tiny";
  return /* @__PURE__ */ n(mc, { className: un.arrayWrap, children: r && r.map(
    (c, d) => /* @__PURE__ */ n(
      "div",
      {
        className: un.arrayItem,
        children: /* @__PURE__ */ n(ue, { children: /* @__PURE__ */ n(
          Re,
          {
            propertyKey: e,
            value: c,
            entity: t,
            property: s.of,
            size: l
          }
        ) })
      },
      `preview_array_storage_${e}_${d}`
    )
  ) });
}
function wc({
  propertyKey: e,
  value: t,
  property: r,
  size: i
}) {
  const a = re(), o = ft({
    property: r,
    propertyValue: t,
    fields: a.fields
  });
  if (Array.isArray(o?.of))
    throw Error("Using array properties instead of single one in `of` in ArrayProperty");
  if (o?.dataType !== "array" || !o.of || o.of.dataType !== "reference")
    throw Error("Picked wrong preview component ArrayOfReferencesPreview");
  const s = i === "regular" ? "small" : "tiny";
  return /* @__PURE__ */ n(B, { sx: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  }, children: t && t.map(
    (l, c) => {
      const d = o.of;
      return /* @__PURE__ */ n(
        B,
        {
          sx: {
            marginTop: 0.25,
            marginBottom: 0.25,
            width: "100%"
          },
          children: /* @__PURE__ */ n(
            Lt,
            {
              disabled: !d.path,
              previewProperties: d.previewProperties,
              size: s,
              reference: l
            }
          )
        },
        `preview_array_ref_${e}_${c}`
      );
    }
  ) });
}
function vc({
  propertyKey: e,
  value: t,
  property: r,
  entity: i,
  size: a
}) {
  if (r.dataType !== "map")
    throw Error("Picked wrong preview component MapPropertyPreview");
  const o = r;
  if (!o.properties)
    throw Error(`You need to specify a 'properties' prop (or specify a custom field) in your map property ${e}`);
  if (!t)
    return null;
  let s;
  return a === "regular" ? s = Object.keys(o.properties) : (s = o.previewProperties || Object.keys(o.properties), a === "small" ? s = s.slice(0, 3) : a === "tiny" && (s = s.slice(0, 1))), a !== "regular" ? /* @__PURE__ */ n(B, { sx: (l) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    "& > *": {
      [l.breakpoints.down("md")]: {
        marginBottom: `${l.spacing(0.5)} !important`
      },
      marginBottom: `${l.spacing(1)} !important`
    }
  }), children: s.map((l, c) => /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n(
    ue,
    {
      children: /* @__PURE__ */ n(
        Re,
        {
          propertyKey: l,
          value: t[l],
          property: o.properties[l],
          entity: i,
          size: a
        }
      )
    },
    "map_preview_" + o.name + l + c
  ) }, `map_${l}`)) }) : /* @__PURE__ */ n(zt, { size: "small", children: /* @__PURE__ */ n(Ut, { children: s && s.map((l, c) => /* @__PURE__ */ E(
    yt,
    {
      sx: {
        "&:last-child th, &:last-child td": {
          borderBottom: 0
        }
      },
      children: [
        /* @__PURE__ */ n(
          Me,
          {
            sx: {
              verticalAlign: "top"
            },
            width: "30%",
            component: "th",
            children: /* @__PURE__ */ n(
              X,
              {
                variant: "caption",
                color: "textSecondary",
                children: o.properties[l].name
              }
            )
          },
          `table-cell-title-${e}-${l}`
        ),
        /* @__PURE__ */ n(
          Me,
          {
            width: "70%",
            component: "th",
            children: /* @__PURE__ */ n(ue, { children: /* @__PURE__ */ n(
              Re,
              {
                propertyKey: l,
                value: t[l],
                property: o.properties[l],
                entity: i,
                size: "small"
              }
            ) })
          },
          `table-cell-${e}-${l}`
        )
      ]
    },
    `map_preview_table_${e}_${c}`
  )) }) }, `map_preview_${e}`);
}
function bo({
  propertyKey: e,
  value: t,
  property: r,
  entity: i,
  size: a
}) {
  const o = re(), s = ft({
    property: r,
    propertyValue: t,
    fields: o.fields
  });
  if (!s.of)
    throw Error(`You need to specify an 'of' prop (or specify a custom field) in your array property ${e}`);
  if (s.dataType !== "array")
    throw Error("Picked wrong preview component ArrayPreview");
  const l = t;
  if (!l)
    return null;
  const c = a === "regular" ? "small" : "tiny";
  return /* @__PURE__ */ n(B, { sx: {
    display: "flex",
    flexDirection: "column"
  }, children: l && l.map(
    (d, A) => {
      const u = s.resolvedProperties[A] ?? s.resolvedProperties[A] ?? (Array.isArray(s.of) ? s.of[A] : s.of);
      return u ? /* @__PURE__ */ E(
        Q.Fragment,
        {
          children: [
            /* @__PURE__ */ n(B, { sx: {
              margin: 1
            }, children: /* @__PURE__ */ n(ue, { children: /* @__PURE__ */ n(
              Re,
              {
                propertyKey: e,
                entity: i,
                value: d,
                property: u,
                size: c
              }
            ) }) }),
            A < l.length - 1 && /* @__PURE__ */ n(jt, {})
          ]
        },
        "preview_array_" + d + "_" + A
      ) : null;
    }
  ) });
}
const yn = "type", Dr = "value", Gn = "ArrayOneOfPreview", $t = {
  array: `${Gn}-array`,
  arrayWrap: `${Gn}-arrayWrap`,
  arrayItemBig: `${Gn}-arrayItemBig`
}, yc = We("div")(({ theme: e }) => ({
  [`&.${$t.array}`]: {
    display: "flex",
    flexDirection: "column"
  },
  [`& .${$t.arrayWrap}`]: {
    display: "flex",
    flexWrap: "wrap"
  },
  [`& .${$t.arrayItemBig}`]: {
    margin: e.spacing(1)
  }
}));
function xc({
  propertyKey: e,
  value: t,
  property: r,
  size: i,
  entity: a
}) {
  const o = re(), s = ft({
    property: r,
    propertyValue: t,
    fields: o.fields
  });
  if (s?.dataType !== "array")
    throw Error("Picked wrong preview component ArrayPreview");
  if (!s?.oneOf)
    throw Error(`You need to specify an 'of' or 'oneOf' prop (or specify a custom field) in your array property ${e}`);
  const l = t;
  if (!l)
    return null;
  const c = i === "regular" ? "small" : "tiny", d = s.oneOf.typeField ?? yn, A = s.oneOf.valueField ?? Dr, u = s.oneOf.properties;
  return /* @__PURE__ */ n(yc, { className: $t.array, children: l && l.map(
    (p, h) => /* @__PURE__ */ E(
      Q.Fragment,
      {
        children: [
          /* @__PURE__ */ n("div", { className: $t.arrayItemBig, children: /* @__PURE__ */ n(ue, { children: p && /* @__PURE__ */ n(
            Re,
            {
              propertyKey: e,
              value: p[A],
              entity: a,
              property: s.resolvedProperties[h] ?? u[p[d]],
              size: c
            }
          ) }) }),
          h < l.length - 1 && /* @__PURE__ */ n(jt, {})
        ]
      },
      "preview_array_" + p + "_" + h
    )
  ) });
}
const Ec = 40, Bc = 100, Cc = 200;
function xt(e) {
  if (e === "tiny")
    return Ec;
  if (e === "small")
    return Bc;
  if (e === "regular")
    return Cc;
  throw Error("Thumbnail size not mapped");
}
function ct(e) {
  switch (e) {
    case "xs":
    case "s":
      return "tiny";
    case "m":
      return "small";
    case "l":
    case "xl":
      return "regular";
    default:
      throw Error("Missing mapping value in getPreviewSizeFrom");
  }
}
function Et({
  property: e,
  size: t
}) {
  e || console.error("No property assigned for skeleton component", e, t);
  let r;
  if (e.dataType === "string") {
    const i = e;
    i.url ? r = Dc(i, t) : i.storage ? r = zi(t) : r = _e();
  } else if (e.dataType === "array") {
    const i = e;
    i.of && (Array.isArray(i.of) ? r = /* @__PURE__ */ E(Z, { children: [
      i.of.map((a, o) => On(a, o)),
      " "
    ] }) : i.of.dataType === "map" && i.of.properties ? r = Ic(i.of.properties, t, i.of.previewProperties) : i.of.dataType === "string" ? i.of.enumValues ? r = Fc() : i.of.storage ? r = On(i.of) : r = Sc() : r = On(i.of));
  } else
    e.dataType === "map" ? r = kc(e, t) : e.dataType === "date" ? r = _e() : e.dataType === "reference" ? r = Rc() : (e.dataType, r = _e());
  return r || null;
}
function kc(e, t) {
  if (!e.properties)
    return /* @__PURE__ */ n(Z, {});
  let r;
  return t === "regular" ? r = Object.keys(e.properties) : (r = e.previewProperties || Object.keys(e.properties), t === "small" ? r = r.slice(0, 3) : t === "tiny" && (r = r.slice(0, 1))), t !== "regular" ? /* @__PURE__ */ n(B, { sx: (i) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    "& > *": {
      [i.breakpoints.down("md")]: {
        marginBottom: `${i.spacing(0.5)} !important`
      },
      marginBottom: `${i.spacing(1)} !important`
    }
  }), children: r.map((i, a) => /* @__PURE__ */ n("div", { children: e.properties && e.properties[i] && /* @__PURE__ */ n(
    Et,
    {
      property: e.properties[i],
      size: "small"
    }
  ) }, `map_${i}`)) }) : /* @__PURE__ */ n(zt, { size: "small", children: /* @__PURE__ */ n(Ut, { children: r && r.map((i, a) => /* @__PURE__ */ E(
    yt,
    {
      sx: {
        "&:last-child th, &:last-child td": {
          borderBottom: 0
        }
      },
      children: [
        /* @__PURE__ */ n(
          Me,
          {
            sx: {
              verticalAlign: "top"
            },
            width: "30%",
            component: "th",
            children: /* @__PURE__ */ n(
              X,
              {
                variant: "caption",
                color: "textSecondary",
                children: e.properties[i].name
              }
            )
          },
          `table-cell-title--${i}`
        ),
        /* @__PURE__ */ n(
          Me,
          {
            width: "70%",
            component: "th",
            children: e.properties && e.properties[i] && /* @__PURE__ */ n(
              Et,
              {
                property: e.properties[i],
                size: "small"
              }
            )
          },
          `table-cell-${i}`
        )
      ]
    },
    `map_preview_table__${a}`
  )) }) });
}
function Ic(e, t, r) {
  let i = r;
  return (!i || !i.length) && (i = Object.keys(e), t && (i = i.slice(0, 3))), /* @__PURE__ */ n(zt, { size: "small", children: /* @__PURE__ */ n(Ut, { children: [0, 1, 2].map((a, o) => /* @__PURE__ */ n(yt, { children: i && i.map(
    (s) => /* @__PURE__ */ n(
      Me,
      {
        component: "th",
        children: /* @__PURE__ */ n(
          Et,
          {
            property: e[s],
            size: "small"
          }
        )
      },
      `table-cell-${s}`
    )
  ) }, `table_${a}_${o}`)) }) });
}
function Sc() {
  return /* @__PURE__ */ n(oe, { children: [0, 1].map((e, t) => _e(t)) });
}
function Fc() {
  return /* @__PURE__ */ n(oe, { children: [0, 1].map(
    (e, t) => /* @__PURE__ */ n(Z, { children: _e(t) })
  ) });
}
function On(e, t = 0) {
  return /* @__PURE__ */ n(oe, { children: [0, 1].map(
    (r, i) => /* @__PURE__ */ n(Z, { children: /* @__PURE__ */ n(
      Et,
      {
        property: e,
        size: "small"
      },
      `i_${i}`
    ) })
  ) }, "array_index");
}
function zi(e) {
  const t = e === "tiny" ? 40 : e === "small" ? 100 : 200;
  return /* @__PURE__ */ n(
    Ue,
    {
      variant: "rectangular",
      sx: (r) => ({
        borderRadius: `${r.shape.borderRadius}px`
      }),
      width: t,
      height: t
    }
  );
}
function Rc() {
  return /* @__PURE__ */ n(Ue, { variant: "rectangular", width: 200, height: 100 });
}
function Dc(e, t = "regular") {
  return typeof e.url == "boolean" ? /* @__PURE__ */ E("div", { style: {
    display: "flex"
  }, children: [
    Ui(),
    _e()
  ] }) : Qc(t);
}
function Qc(e) {
  return /* @__PURE__ */ n(
    B,
    {
      sx: {
        width: xt(e),
        height: xt(e)
      },
      children: Ui()
    }
  );
}
function _e(e) {
  return /* @__PURE__ */ n(Ue, { variant: "text" }, `skeleton_${e}`);
}
function Mg(e) {
  return /* @__PURE__ */ n(
    Ue,
    {
      height: 20,
      variant: "text"
    }
  );
}
function Ui() {
  return /* @__PURE__ */ n(Ue, { variant: "rectangular", width: 24, height: 24 });
}
const Pg = rn.memo(
  function({
    builder: t
  }) {
    const [r, i] = M(!0), [a, o] = M(null);
    return z(() => {
      let s = !1;
      return t.then((l) => {
        s || (i(!1), o(l));
      }).catch((l) => {
        i(!1), console.error(l);
      }), () => {
        s = !0;
      };
    }, [t]), r ? /* @__PURE__ */ n(Ue, { variant: "text" }) : /* @__PURE__ */ n(rn.Fragment, { children: a });
  }
), Tc = "MMMM dd, yyyy, HH:mm:ss";
function Mc({
  date: e
}) {
  const t = re(), r = t?.locale ? Jo[t?.locale] : void 0, i = t?.dateTimeFormat ?? Tc, a = e ? Js(e, i, { locale: r }) : "";
  return /* @__PURE__ */ n(Z, { children: a });
}
function Pc({ size: e, url: t }) {
  const [r, i] = M(!1), a = ie(() => xt(e), [e]), o = Be();
  if (e === "tiny")
    return /* @__PURE__ */ n(
      "img",
      {
        src: t,
        style: {
          position: "relative",
          objectFit: "cover",
          width: a,
          height: a,
          borderRadius: o.shape.borderRadius,
          maxHeight: "100%"
        }
      },
      "tiny_image_preview_" + t
    );
  const s = {
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: o.shape.borderRadius
  };
  return /* @__PURE__ */ E(
    B,
    {
      sx: {
        position: "relative",
        maxWidth: "100%",
        maxHeight: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: a,
        height: a
      },
      onMouseEnter: () => i(!0),
      onMouseMove: () => i(!0),
      onMouseLeave: () => i(!1),
      children: [
        /* @__PURE__ */ n(
          "img",
          {
            src: t,
            style: s
          }
        ),
        r && /* @__PURE__ */ E(Z, { children: [
          navigator && /* @__PURE__ */ n(de, { title: "Copy url to clipboard", children: /* @__PURE__ */ n(B, { sx: {
            borderRadius: "9999px",
            position: "absolute",
            bottom: -4,
            right: 32,
            backgroundColor: o.palette.background.default
          }, children: /* @__PURE__ */ n(
            ne,
            {
              size: "small",
              onClick: (l) => (l.stopPropagation(), navigator.clipboard.writeText(t)),
              children: /* @__PURE__ */ n(
                qs,
                {
                  htmlColor: "#666",
                  fontSize: "small"
                }
              )
            }
          ) }) }),
          /* @__PURE__ */ n(de, { title: "Open image in new tab", children: /* @__PURE__ */ n(
            "a",
            {
              style: {
                borderRadius: "9999px",
                position: "absolute",
                bottom: -4,
                right: -4,
                backgroundColor: o.palette.background.default
              },
              href: t,
              rel: "noopener noreferrer",
              target: "_blank",
              children: /* @__PURE__ */ n(
                ne,
                {
                  size: "small",
                  onClick: (l) => l.stopPropagation(),
                  children: /* @__PURE__ */ n(
                    Ht,
                    {
                      htmlColor: "#666",
                      fontSize: "small"
                    }
                  )
                }
              )
            }
          ) })
        ] })
      ]
    },
    "image_preview_" + t
  );
}
function Kn({
  url: e,
  previewType: t,
  size: r,
  hint: i
}) {
  return t ? t === "image" ? /* @__PURE__ */ n(
    Pc,
    {
      url: e,
      size: r
    },
    `image_preview_${e}_${r}`
  ) : t === "audio" ? /* @__PURE__ */ E(
    "audio",
    {
      controls: !0,
      src: e,
      children: [
        "Your browser does not support the",
        /* @__PURE__ */ n("code", { children: "audio" }),
        " element."
      ]
    },
    `audio_preview_${e}_${r}`
  ) : t === "video" ? /* @__PURE__ */ n(
    Ya,
    {
      sx: { maxWidth: r === "small" ? 300 : 500 },
      component: "video",
      controls: !0,
      image: e
    },
    `video_preview_${e}_${r}`
  ) : /* @__PURE__ */ n(
    "a",
    {
      href: e,
      rel: "noopener noreferrer",
      target: "_blank",
      onClick: (a) => a.stopPropagation(),
      children: /* @__PURE__ */ E(B, { sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: xt(r),
        height: xt(r)
      }, children: [
        /* @__PURE__ */ n(Zs, { sx: { flexGrow: 1 } }),
        i && /* @__PURE__ */ n(de, { title: i, children: /* @__PURE__ */ n(
          X,
          {
            sx: {
              maxWidth: "100%",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              direction: "rtl",
              textAlign: "left"
            },
            variant: "caption",
            children: i
          }
        ) })
      ] })
    },
    `link_preview_${e}_${r}`
  ) : /* @__PURE__ */ E(
    Gt,
    {
      sx: (a) => ({
        display: "flex",
        wordBreak: "break-word",
        fontWeight: a.typography.fontWeightMedium
      }),
      href: e,
      onMouseDown: (a) => {
        a.preventDefault();
      },
      target: "_blank",
      children: [
        /* @__PURE__ */ n(Ht, { style: { marginRight: 8 }, fontSize: "small" }),
        e
      ]
    }
  );
}
const $c = Q.memo(Oc, Gc);
function Gc(e, t) {
  return e.size === t.size && e.storagePathOrDownloadUrl === t.storagePathOrDownloadUrl && e.storeUrl === t.storeUrl;
}
const wo = {};
function Oc({
  storeUrl: e,
  storagePathOrDownloadUrl: t,
  size: r
}) {
  const i = _t(), [a, o] = Q.useState(wo[t]);
  if (z(() => {
    if (!t)
      return;
    let c = !1;
    return i.getDownloadURL(t).then(function(d) {
      c || (o(d), wo[t] = d);
    }), () => {
      c = !0;
    };
  }, [t]), !t)
    return null;
  const s = a?.metadata ? Lc(a?.metadata.contentType) : void 0, l = s?.startsWith("image") ? "image" : s?.startsWith("video") ? "video" : s?.startsWith("audio") ? "audio" : "file";
  return a ? /* @__PURE__ */ n(
    Kn,
    {
      previewType: l,
      url: a.url,
      size: r,
      hint: t
    }
  ) : zi(r);
}
function Lc(e) {
  return e.startsWith("image") ? "image/*" : e.startsWith("video") ? "video/*" : e.startsWith("audio") ? "audio/*" : e.startsWith("application") ? "application/*" : e.startsWith("text") ? "text/*" : e.startsWith("font") ? "font/*" : e;
}
function Yc({ value: e }) {
  return e ? /* @__PURE__ */ n(ps, { color: "secondary" }) : /* @__PURE__ */ n(ms, { color: "disabled" });
}
const Vc = new pi(), Qr = Q.memo(
  function({
    source: t
  }) {
    const r = ie(() => Vc.render(typeof t == "string" ? t : ""), [t]);
    return /* @__PURE__ */ n(
      "div",
      {
        dangerouslySetInnerHTML: { __html: r }
      }
    );
  },
  Wc
);
function Wc(e, t) {
  return e.source === t.source;
}
function Tt() {
  return /* @__PURE__ */ n(B, { sx: {
    borderRadius: "9999px",
    backgroundColor: "rgba(128,128,128,0.1)",
    width: "18px",
    height: "6px",
    display: "inline-block"
  } });
}
const Lt = rn.memo(Uc, zc);
function zc(e, t) {
  return e.disabled === t.disabled && e.size === t.size && e.onHover === t.onHover && e.reference?.id === t.reference?.id && e.reference?.path === t.reference?.path;
}
function Uc({
  disabled: e,
  reference: t,
  previewProperties: r,
  size: i,
  onHover: a,
  onClick: o
}) {
  const s = re(), l = Ie(), c = At();
  if (e)
    return /* @__PURE__ */ n(
      vo,
      {
        onClick: o,
        onHover: a,
        size: i,
        children: "Disabled"
      }
    );
  const d = l.getCollection(t.path);
  if (!d)
    throw Error(`Couldn't find the corresponding collection view for the path: ${t.path}`);
  const {
    entity: A,
    dataLoading: u,
    dataLoadingError: p
  } = Cr({
    path: t.path,
    entityId: t.id,
    collection: d,
    useCache: !0
  }), h = ie(() => ke({
    collection: d,
    path: t.path,
    values: A?.values,
    fields: s.fields
  }), [d]), f = ie(
    () => Aa(h, s.fields, r, i === "small" || i === "regular" ? 3 : 1),
    [r, h, i]
  );
  let g;
  function m(v, b) {
    return /* @__PURE__ */ n(xe, { error: v, tooltip: b });
  }
  return h ? (t ? t instanceof ut ? A && !A.values ? g = m("Reference does not exist", t.path) : g = /* @__PURE__ */ E(Z, { children: [
    /* @__PURE__ */ E(B, { sx: {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      maxWidth: "calc(100% - 52px)",
      margin: 1
    }, children: [
      i !== "tiny" && (t ? /* @__PURE__ */ n(B, { sx: {
        display: i !== "regular" ? "block" : void 0,
        whiteSpace: i !== "regular" ? "nowrap" : void 0,
        overflow: i !== "regular" ? "hidden" : void 0,
        textOverflow: i !== "regular" ? "ellipsis" : void 0
      }, children: /* @__PURE__ */ n(
        X,
        {
          variant: "caption",
          className: "mono",
          children: t.id
        }
      ) }) : /* @__PURE__ */ n(Ue, { variant: "text" })),
      f && f.map((v) => {
        const b = h.properties[v];
        return b ? /* @__PURE__ */ n(
          B,
          {
            sx: {
              my: f.length > 1 ? 0.5 : 0
            },
            children: A ? /* @__PURE__ */ n(
              Re,
              {
                propertyKey: v,
                value: Bt(A.values, v),
                property: b,
                entity: A,
                size: "tiny"
              }
            ) : /* @__PURE__ */ n(
              Et,
              {
                property: b,
                size: "tiny"
              }
            )
          },
          "ref_prev_" + v
        ) : null;
      })
    ] }),
    /* @__PURE__ */ n(B, { sx: {
      my: i === "tiny" ? 0.5 : 1
    }, children: A && /* @__PURE__ */ n(de, { title: `See details for ${A.id}`, children: /* @__PURE__ */ n(
      ne,
      {
        color: "inherit",
        size: "small",
        onClick: (v) => {
          v.stopPropagation(), s.onAnalyticsEvent?.("entity_click_from_reference", {
            path: A.path,
            entityId: A.id
          }), c.open({
            entityId: A.id,
            path: A.path,
            collection: h,
            updateUrl: !0
          });
        },
        children: /* @__PURE__ */ n(mr, { fontSize: "small" })
      }
    ) }) })
  ] }) : (console.error("Reference preview received value of type", typeof t), g = m("Unexpected value", JSON.stringify(t))) : g = m("Reference not set"), /* @__PURE__ */ n(
    vo,
    {
      onClick: o,
      onHover: a,
      size: i,
      children: g
    }
  )) : /* @__PURE__ */ n(
    xe,
    {
      error: "Could not find collection with id " + h
    }
  );
}
function vo({ children: e, onHover: t, size: r, onClick: i }) {
  return /* @__PURE__ */ n(
    X,
    {
      variant: "label",
      sx: (a) => {
        const o = i ? {
          tabindex: 0,
          backgroundColor: t ? a.palette.mode === "dark" ? et(a.palette.background.default, 0.1) : ye(a.palette.background.default, 0.15) : ye(a.palette.background.default, 0.1),
          transition: "background-color 300ms ease, box-shadow 300ms ease",
          boxShadow: t ? "0 0 0 2px rgba(128,128,128,0.05)" : void 0,
          cursor: t ? "pointer" : void 0
        } : {};
        return {
          width: "100%",
          display: "flex",
          backgroundColor: ye(a.palette.background.default, 0.1),
          borderRadius: `${a.shape.borderRadius}px`,
          overflow: "hidden",
          padding: r === "regular" ? 1 : 0,
          itemsAlign: r === "tiny" ? "center" : void 0,
          ...o
        };
      },
      onClick: (a) => {
        i && (a.preventDefault(), i());
      },
      children: e
    }
  );
}
const jc = (e, ...t) => ({
  ...t.reduce((r, i) => ({ ...r, [i]: e[i] }), {})
});
function Ln(e) {
  return e && typeof e == "object" && !Array.isArray(e);
}
function Ze(e, t) {
  const r = Ln(e), i = r ? Object.assign({}, e) : e;
  return r && Ln(t) && Object.keys(t).forEach((a) => {
    Ln(t[a]) ? a in e ? i[a] = Ze(e[a], t[a]) : Object.assign(i, { [a]: t[a] }) : Object.assign(i, { [a]: t[a] });
  }), i;
}
function Bt(e, t) {
  if (typeof e == "object") {
    if (t in e)
      return e[t];
    if (t.includes(".")) {
      const r = t.split(".");
      return Bt(e[r[0]], r.slice(1).join("."));
    }
  }
}
function $g(e, t) {
  let r = { ...e };
  const i = t.split("."), a = i.pop();
  for (const o of i)
    r = r[o];
  return a && delete r[a], r;
}
function yo(e) {
  return typeof e == "object" ? Object.entries(e).filter(([t, r]) => typeof r != "function").map(([t, r]) => Array.isArray(r) ? { [t]: r.map((i) => yo(i)) } : typeof r == "object" ? { [t]: yo(r) } : { [t]: r }).reduce((t, r) => ({ ...t, ...r }), {}) : e;
}
function xo(e) {
  if (!e)
    return null;
  if (typeof e == "object") {
    if ("id" in e)
      return e.id;
    if (e instanceof Date)
      return e.toLocaleString();
    if (e instanceof dn)
      return qr(e);
  }
  return qr(e, { ignoreUnknown: !0 });
}
function Eo(e) {
  if (typeof e == "function")
    return e;
  if (Array.isArray(e))
    return e.map((t) => Eo(t));
  if (typeof e == "object") {
    const t = {};
    return Object.keys(e).forEach((r) => {
      if (!Bo(e)) {
        const i = Eo(e[r]);
        i !== void 0 && !Bo(i) && (t[r] = i);
      }
    }), t;
  }
  return e;
}
function Bo(e) {
  return e && Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length === 0;
}
function Jt(e) {
  return e.readOnly || e.dataType === "date" && e.autoValue ? !0 : e.dataType === "reference" ? !e.path : !1;
}
function Tr(e) {
  return typeof e.disabled == "object" && Boolean(e.disabled.hidden);
}
function ot(e) {
  return typeof e == "function";
}
function fn(e) {
  return e ? Object.entries(e).map(([t, r]) => {
    const i = Nc(r);
    return i === void 0 ? {} : { [t]: i };
  }).reduce((t, r) => ({ ...t, ...r }), {}) : {};
}
function Nc(e) {
  if (!ot(e))
    if (e.dataType === "map" && e.properties) {
      const t = fn(e.properties);
      return Object.keys(t).length === 0 ? void 0 : t;
    } else
      return e.defaultValue;
}
function Hc({
  inputValues: e,
  properties: t,
  status: r,
  timestampNowValue: i,
  setDateToMidnight: a
}) {
  return ji(
    e,
    t,
    (o, s) => {
      if (s.dataType === "date") {
        let l;
        return r === "existing" && s.autoValue === "on_update" || (r === "new" || r === "copy") && (s.autoValue === "on_update" || s.autoValue === "on_create") ? l = i : l = o, s.mode === "date" && (l = a(l)), l;
      } else
        return o;
    }
  ) ?? {};
}
function _c(e, t) {
  const r = e;
  return Object.entries(t).forEach(([i, a]) => {
    e && e[i] !== void 0 ? r[i] = e[i] : a.validation?.required && (r[i] = null);
  }), r;
}
function gn(e) {
  return new ut(e.id, e.path);
}
function ji(e, t, r) {
  const i = Object.entries(t).map(([o, s]) => {
    const l = e && e[o], c = er(l, s, r);
    if (c !== void 0)
      return { [o]: c };
  }).reduce((o, s) => ({ ...o, ...s }), {}), a = { ...e, ...i };
  if (Object.keys(a).length !== 0)
    return a;
}
function er(e, t, r) {
  let i;
  if (t.dataType === "map" && t.properties)
    i = ji(e, t.properties, r);
  else if (t.dataType === "array")
    if (t.of && Array.isArray(e))
      i = e.map((a) => er(a, t.of, r));
    else if (t.oneOf && Array.isArray(e)) {
      const a = t.oneOf?.typeField ?? yn, o = t.oneOf?.valueField ?? Dr;
      i = e.map((s) => {
        if (s === null)
          return null;
        if (typeof s != "object")
          return s;
        const l = s[a], c = t.oneOf?.properties[l];
        return !l || !c ? s : {
          [a]: l,
          [o]: er(s[o], c, r)
        };
      });
    } else
      i = e;
  else
    i = r(e, t);
  return i;
}
function Ni(e, t) {
  const r = e.subcollections?.map((a) => {
    const o = t.subcollections?.find((s) => s.path === a.path) ?? t.subcollections?.find((s) => s.alias === a.alias);
    return o ? Ni(a, o) : a;
  }), i = Ze(e, t);
  return {
    ...i,
    subcollections: r,
    properties: Hi(i.properties, i.propertiesOrder)
  };
}
function Gg(e, t) {
  const r = e.map((o) => ({
    ...o,
    editable: !0,
    deletable: !0
  })), i = (t ?? []).map((o) => {
    const s = r?.find((l) => l.path === o.path) ?? r?.find((l) => l.alias === o.alias);
    return s ? { ...Ni(o, s), deletable: !1 } : { ...o, deletable: !1 };
  }), a = r.filter((o) => !i.map((s) => s.path).includes(o.path) || !i.map((s) => s.alias).includes(o.alias));
  return [...i, ...a];
}
function Hi(e, t) {
  try {
    const r = Object.keys(e);
    return (t ?? r).map((a) => {
      if (e[a]) {
        const o = e[a];
        return !ot(o) && o?.dataType === "map" && o.properties ? {
          [a]: {
            ...o,
            properties: Hi(o.properties, o.propertiesOrder)
          }
        } : { [a]: o };
      } else
        return;
    }).filter((a) => a !== void 0).reduce((a, o) => ({ ...a, ...o }), {});
  } catch (r) {
    return console.error("Error sorting properties", r), e;
  }
}
function _i(e) {
  const t = e.subcollections, r = t?.length ?? 0, i = e.views;
  return (i?.length ?? 0) > 0 || r > 0 ? i && i?.length > 0 ? i[0] : t && t?.length > 0 ? t[0] : void 0 : void 0;
}
const Jc = /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g, Og = (e) => {
  const t = e.match(Jc);
  return t ? t.map((r) => r.toLowerCase()).join("-") : "";
}, Zc = /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g, Lg = (e) => {
  const t = e.match(Zc);
  return t ? t.map((r) => r.toLowerCase()).join("_") : "";
};
function Yt(e = 5) {
  return Math.random().toString(36).slice(2, 2 + e);
}
function Yg() {
  return Math.floor(Math.random() * 16777215).toString(16);
}
const qc = "::";
function Co(e) {
  return Xc(tt(e));
}
function Xc(e) {
  return e.length === 1 ? e[0] : e.reduce((t, r) => `${t}${qc}${r}`);
}
function tt(e) {
  return e.split("/").filter((t, r) => r % 2 === 0);
}
function Vg(e) {
  return e ? e.toString() : "";
}
function Kc(e) {
  if (!e)
    return;
  const t = e.match(/\/(.*?)\/([a-z]*)?$/i);
  return t ? new RegExp(t[1], t[2] || "") : new RegExp(e, "");
}
function Wg(e) {
  return e.match(/\/((?![*+?])(?:[^\r\n[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*])+)\/((?:g(?:im?|mi?)?|i(?:gm?|mg?)?|m(?:gi?|ig?)?)?)/) ? !0 : !!e.match(/((?![*+?])(?:[^\r\n[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*])+)/);
}
function Ji(e, t, r = 300) {
  const i = Q.useRef(!1), a = Q.useCallback(() => {
    t(), i.current = !1;
  }, [t]);
  Q.useEffect(
    () => {
      i.current = !0;
      const o = setTimeout(a, r);
      return () => {
        clearTimeout(o), i.current && a();
      };
    },
    [e]
  );
}
function Mr({
  name: e,
  addLabel: t,
  value: r,
  disabled: i,
  buildEntry: a,
  small: o,
  onInternalIdAdded: s,
  includeAddButton: l
}) {
  const c = r && Array.isArray(r) && r.length > 0, d = ie(
    () => c ? r.map((h, f) => h ? {
      [xo(h) + f]: Yn()
    } : {}).reduce((h, f) => ({ ...h, ...f }), {}) : {},
    [r, c]
  ), A = he(d), [u, p] = M(
    c ? Object.values(A.current) : []
  );
  return z(() => {
    if (c && r && r.length !== u.length) {
      const h = r.map((f, g) => {
        const m = xo(f) + g;
        if (m in A.current)
          return A.current[m];
        {
          const v = Yn();
          return A.current[m] = v, v;
        }
      });
      p(h);
    }
  }, [c, u.length, r]), /* @__PURE__ */ n(
    Vs,
    {
      name: e,
      validateOnChange: !0,
      render: (h) => {
        const f = () => {
          if (i)
            return;
          const v = Yn(), b = [...u, v];
          s && s(v), p(b), h.push(null);
        }, g = (v) => {
          const b = [...u];
          b.splice(v, 1), p(b), h.remove(v);
        };
        return /* @__PURE__ */ n(ui, { onDragEnd: (v) => {
          if (!v.destination)
            return;
          const b = v.source.index, x = v.destination.index, y = [...u], k = y[b];
          y[b] = y[x], y[x] = k, p(y), h.move(b, x);
        }, children: /* @__PURE__ */ n(
          fi,
          {
            droppableId: `droppable_${e}`,
            renderClone: (v, b, x) => {
              const y = x.source.index, k = u[y];
              return /* @__PURE__ */ n(
                ko,
                {
                  provided: v,
                  internalId: k,
                  index: y,
                  name: e,
                  small: o,
                  disabled: i,
                  buildEntry: a,
                  remove: g
                }
              );
            },
            children: (v, b) => /* @__PURE__ */ E(
              "div",
              {
                ...v.droppableProps,
                ref: v.innerRef,
                children: [
                  c && u.map((x, y) => /* @__PURE__ */ n(
                    gi,
                    {
                      draggableId: `array_field_${e}_${x}`,
                      isDragDisabled: i,
                      index: y,
                      children: (k, I) => /* @__PURE__ */ n(
                        ko,
                        {
                          provided: k,
                          internalId: x,
                          index: y,
                          name: e,
                          small: o,
                          disabled: i,
                          buildEntry: a,
                          remove: g
                        }
                      )
                    },
                    `array_field_${e}_${x}`
                  )),
                  v.placeholder,
                  l && /* @__PURE__ */ n(
                    B,
                    {
                      p: 1,
                      justifyContent: "center",
                      textAlign: "left",
                      children: /* @__PURE__ */ n(
                        ae,
                        {
                          variant: "outlined",
                          color: "primary",
                          disabled: i,
                          startIcon: /* @__PURE__ */ n(Ns, {}),
                          onClick: f,
                          children: t ?? "Add"
                        }
                      )
                    }
                  )
                ]
              }
            )
          }
        ) });
      }
    }
  );
}
function ko({
  provided: e,
  index: t,
  name: r,
  internalId: i,
  small: a,
  disabled: o,
  buildEntry: s,
  remove: l
}) {
  return /* @__PURE__ */ n(
    B,
    {
      ref: e.innerRef,
      ...e.draggableProps,
      style: e.draggableProps.style,
      sx: (c) => ({
        marginBottom: 1,
        borderRadius: c.shape.borderRadius,
        opacity: 1
      }),
      children: /* @__PURE__ */ E(
        B,
        {
          display: "flex",
          children: [
            /* @__PURE__ */ n(
              B,
              {
                flexGrow: 1,
                width: "100%",
                children: s(t, i)
              },
              `field_${r}_entryValue`
            ),
            /* @__PURE__ */ E(
              B,
              {
                display: "flex",
                flexDirection: a ? "row" : "column",
                sx: {
                  pl: 1
                },
                alignItems: "center",
                children: [
                  /* @__PURE__ */ n(
                    de,
                    {
                      title: "Remove",
                      children: /* @__PURE__ */ n(
                        ne,
                        {
                          size: "small",
                          "aria-label": "remove",
                          disabled: o,
                          onClick: () => l(t),
                          children: /* @__PURE__ */ n(
                            Ai,
                            {
                              fontSize: "small"
                            }
                          )
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ n(
                    "div",
                    {
                      ...e.dragHandleProps,
                      children: /* @__PURE__ */ n(
                        de,
                        {
                          title: "Move",
                          children: /* @__PURE__ */ n(
                            ne,
                            {
                              size: "small",
                              disabled: o,
                              sx: { cursor: o ? "inherit" : "move" },
                              children: /* @__PURE__ */ n(
                                Hs,
                                {
                                  fontSize: "small",
                                  color: o ? "disabled" : "inherit"
                                }
                              )
                            }
                          )
                        }
                      )
                    }
                  )
                ]
              }
            )
          ]
        },
        `field_${i}`
      )
    }
  );
}
function Yn() {
  return Math.floor(Math.random() * Math.floor(Number.MAX_SAFE_INTEGER));
}
function De({ property: e }) {
  const t = typeof e.disabled == "object" ? e.disabled.disabledMessage : void 0;
  return /* @__PURE__ */ E(B, { display: "flex", children: [
    /* @__PURE__ */ n(B, { flexGrow: 1, children: /* @__PURE__ */ n(Ee, { children: t || e.description }) }),
    e.longDescription && /* @__PURE__ */ n(
      de,
      {
        title: /* @__PURE__ */ n(
          X,
          {
            variant: "caption",
            children: e.longDescription
          }
        ),
        placement: "bottom-start",
        arrow: !0,
        children: /* @__PURE__ */ n(
          ne,
          {
            edge: "start",
            size: "small",
            sx: {
              alignSelf: "flex-start"
            },
            children: /* @__PURE__ */ n(
              _s,
              {
                color: "disabled",
                fontSize: "small"
              }
            )
          }
        )
      }
    )
  ] });
}
function Qe({
  property: e,
  small: t,
  sx: r
}) {
  return /* @__PURE__ */ E(B, { sx: {
    display: "inline-flex",
    paddingBottom: "2px",
    alignItems: "center",
    gap: t ? 1 : 1.5,
    ...r
  }, component: "span", children: [
    $r(e),
    /* @__PURE__ */ n(
      X,
      {
        component: "span",
        sx: {
          fontWeight: 500,
          fontSize: t ? "1rem" : ".85rem",
          transformOrigin: "left top",
          transform: t ? "translate(8px, 0px) scale(0.75)" : void 0
        },
        children: e.name
      }
    )
  ] });
}
function zg(e) {
  const t = Q.useRef(), [r, i] = Q.useState(e.value), a = on(r);
  z(() => {
    i(e.value);
  }, [e.value]), z(() => {
    !e.value && !a || a !== e.value && t.current && e.onChange && e.onChange(t.current);
  }, [a, e.value, e.onChange]);
  const o = w((s) => {
    t.current = s, i(s.target.value);
  }, []);
  return /* @__PURE__ */ n(
    nt,
    {
      ...e,
      onChange: o,
      value: r
    }
  );
}
function Ug({
  field: e,
  form: t,
  label: r,
  tooltip: i,
  disabled: a,
  size: o = "small"
}) {
  const s = /* @__PURE__ */ n(
    pn,
    {
      checked: e.value ?? !1,
      sx: { ml: 0 },
      disabled: a,
      control: /* @__PURE__ */ n(
        mn,
        {
          size: o,
          disabled: a,
          onChange: (l, c) => t.setFieldValue(e.name, c)
        }
      ),
      label: /* @__PURE__ */ n(X, { variant: "body2", children: r })
    }
  );
  return i ? /* @__PURE__ */ n(
    de,
    {
      title: i,
      children: s
    }
  ) : s;
}
function Io({
  propertyKey: e,
  value: t,
  setValue: r,
  error: i,
  showError: a,
  disabled: o,
  autoFocus: s,
  touched: l,
  property: c,
  includeDescription: d,
  shouldAlwaysRerender: A
}) {
  const u = c.enumValues;
  Te({
    property: c,
    value: t,
    setValue: r
  });
  const p = w(() => {
    r(null);
  }, [r]);
  return /* @__PURE__ */ E(
    we,
    {
      fullWidth: !0,
      required: c.validation?.required,
      error: a,
      disabled: o,
      sx: {
        "& .MuiInputLabel-root": {
          mt: 1 / 2,
          ml: 1 / 2
        },
        "& .MuiInputLabel-shrink": {
          mt: 2
        }
      },
      children: [
        /* @__PURE__ */ n(It, { id: `${e}-select-label`, children: /* @__PURE__ */ n(Qe, { property: c }) }),
        /* @__PURE__ */ n(
          Je,
          {
            sx: {
              minHeight: "64px"
            },
            variant: "filled",
            labelId: `${e}-select-label`,
            autoFocus: s,
            value: t ?? "",
            disabled: o,
            endAdornment: c.clearable && /* @__PURE__ */ n(
              ne,
              {
                sx: {
                  position: "absolute",
                  top: "12px",
                  right: "32px"
                },
                onClick: p,
                children: /* @__PURE__ */ n(qe, {})
              }
            ),
            onChange: (h) => {
              const f = h.target.value, g = f ? c.dataType === "number" ? parseFloat(f) : f : null;
              return r(g);
            },
            renderValue: (h) => /* @__PURE__ */ n(
              Le,
              {
                enumKey: h,
                enumValues: u,
                small: !1
              }
            ),
            children: u && u.map((h) => /* @__PURE__ */ n(
              Ge,
              {
                value: h.id,
                disabled: An(h),
                children: /* @__PURE__ */ n(
                  Le,
                  {
                    enumKey: h.id,
                    enumValues: u,
                    small: !0
                  }
                )
              },
              `select_${e}_${h.id}`
            ))
          }
        ),
        d && /* @__PURE__ */ n(De, { property: c }),
        a && /* @__PURE__ */ n(Ee, { children: i })
      ]
    }
  );
}
function So({
  propertyKey: e,
  value: t,
  setValue: r,
  error: i,
  showError: a,
  disabled: o,
  property: s,
  includeDescription: l,
  autoFocus: c
}) {
  const d = s.of;
  if (!d)
    throw Error("Using wrong component ArrayEnumSelect");
  if (Array.isArray(d))
    throw Error("Using array properties instead of single one in `of` in ArrayProperty");
  if (d.dataType !== "string" && d.dataType !== "number")
    throw Error("Field misconfiguration: array field of type string or number");
  const A = d.enumValues;
  if (!A)
    throw console.error(s), Error("Field misconfiguration: array field of type string or number needs to have enumValues");
  Te({
    property: s,
    value: t,
    setValue: r
  });
  const u = w(() => {
    r(null);
  }, [r]);
  if (A instanceof Error)
    return /* @__PURE__ */ n(xe, { error: A.message });
  const p = !!t && Array.isArray(t);
  return /* @__PURE__ */ E(
    we,
    {
      fullWidth: !0,
      required: s.validation?.required,
      error: a,
      sx: {
        "& .MuiInputLabel-root": {
          mt: 1 / 2,
          ml: 1 / 2
        },
        "& .MuiInputLabel-shrink": {
          mt: 2
        }
      },
      children: [
        /* @__PURE__ */ n(It, { id: `${e}-multiselect-label`, children: /* @__PURE__ */ n(Qe, { property: s }) }),
        /* @__PURE__ */ n(
          Je,
          {
            multiple: !0,
            sx: {
              minHeight: "64px"
            },
            variant: "filled",
            labelId: `${e}-multiselect-label`,
            value: p ? t.map((h) => h.toString()) : [],
            autoFocus: c,
            disabled: o,
            endAdornment: d.clearable && /* @__PURE__ */ n(
              ne,
              {
                sx: {
                  position: "absolute",
                  top: "12px",
                  right: "32px"
                },
                onClick: u,
                children: /* @__PURE__ */ n(qe, {})
              }
            ),
            onChange: (h) => {
              let f;
              return d?.dataType === "number" ? f = h.target.value ? h.target.value.map((g) => parseFloat(g)) : [] : f = h.target.value, r(
                f
              );
            },
            renderValue: (h) => /* @__PURE__ */ n(
              Rr,
              {
                value: h,
                name: e,
                enumValues: A,
                size: "regular"
              }
            ),
            children: vn(A).map((h) => {
              const f = h.id, g = p && t.map((m) => m.toString()).includes(f.toString());
              return /* @__PURE__ */ E(
                Ge,
                {
                  value: f,
                  disabled: An(h),
                  dense: !0,
                  children: [
                    /* @__PURE__ */ n(bn, { checked: g }),
                    /* @__PURE__ */ n(an, { primary: /* @__PURE__ */ n(
                      Le,
                      {
                        enumKey: f,
                        enumValues: A,
                        small: !0
                      }
                    ) })
                  ]
                },
                `form-select-${e}-${f}`
              );
            })
          }
        ),
        l && /* @__PURE__ */ n(De, { property: s }),
        a && /* @__PURE__ */ n(Ee, { children: i })
      ]
    }
  );
}
function ed({
  propertyKey: e,
  value: t,
  error: r,
  showError: i,
  isSubmitting: a,
  tableMode: o,
  property: s,
  includeDescription: l,
  setValue: c
}) {
  const d = s.of;
  if (d.dataType !== "reference")
    throw Error("ArrayOfReferencesField expected a property containing references");
  const A = s.expanded === void 0 ? !0 : s.expanded, [u, p] = Q.useState(!1), h = t && Array.isArray(t) ? t.map((I) => I.id) : [];
  Te({
    property: s,
    value: t,
    setValue: c
  });
  const f = Ie(), g = ie(() => d.path ? f.getCollection(d.path) : void 0, [d.path]);
  if (!g)
    throw Error(`Couldn't find the corresponding collection for the path: ${d.path}`);
  const m = w((I) => {
    c(I.map((C) => gn(C)));
  }, [c]), v = Sr(
    {
      multiselect: !0,
      path: d.path,
      collection: g,
      onMultipleEntitiesSelected: m,
      selectedEntityIds: h,
      forceFilter: d.forceFilter
    }
  ), b = w(() => {
    v.open();
  }, [v]), x = w((I, C) => {
    const S = t && t.length > I ? t[I] : void 0;
    return S ? /* @__PURE__ */ n(
      "div",
      {
        onMouseEnter: () => p(!0),
        onMouseMove: () => p(!0),
        onMouseLeave: () => p(!1),
        children: /* @__PURE__ */ n(
          Lt,
          {
            disabled: !d.path,
            previewProperties: d.previewProperties,
            size: "regular",
            onClick: b,
            reference: S,
            onHover: u
          }
        )
      }
    ) : /* @__PURE__ */ n("div", { children: "Internal ERROR" });
  }, [d.path, d.previewProperties, u, t]), y = /* @__PURE__ */ n(Qe, { property: s }), k = /* @__PURE__ */ E(Z, { children: [
    !g && /* @__PURE__ */ n(
      xe,
      {
        error: "The specified collection does not exist. Check console"
      }
    ),
    g && /* @__PURE__ */ E(Z, { children: [
      /* @__PURE__ */ n(
        Mr,
        {
          value: t,
          addLabel: s.name ? "Add reference to " + s.name : "Add reference",
          name: e,
          buildEntry: x,
          disabled: a
        }
      ),
      /* @__PURE__ */ n(
        B,
        {
          p: 1,
          justifyContent: "center",
          textAlign: "left",
          children: /* @__PURE__ */ E(
            ae,
            {
              variant: "outlined",
              color: "primary",
              disabled: a,
              onClick: b,
              children: [
                "Edit ",
                s.name
              ]
            }
          )
        }
      )
    ] })
  ] });
  return /* @__PURE__ */ n(Z, { children: /* @__PURE__ */ E(we, { fullWidth: !0, error: i, children: [
    !o && /* @__PURE__ */ n(Zt, { expanded: A, title: y, children: k }),
    o && k,
    l && /* @__PURE__ */ n(De, { property: s }),
    i && typeof r == "string" && /* @__PURE__ */ n(Ee, { children: r })
  ] }) });
}
async function td(e, t, r, i, a, o, s, l) {
  let c;
  return typeof e == "function" ? (c = await e({
    path: a,
    entityId: i,
    values: r,
    property: o,
    file: s,
    storage: t,
    propertyKey: l
  }), c || console.warn("Storage callback returned empty result. Using default name value")) : c = Zi(s, e, i, l, a), c || (c = Yt() + "_" + s.name), c;
}
function nd(e, t, r, i, a, o, s, l) {
  let c;
  return typeof e == "function" ? (c = e({
    path: a,
    entityId: i,
    values: r,
    property: o,
    file: s,
    storage: t,
    propertyKey: l
  }), c || console.warn("Storage callback returned empty result. Using default name value")) : c = Zi(s, e, i, l, a), c || (c = Yt() + "_" + s.name), c;
}
function Zi(e, t, r, i, a) {
  const o = e.name.split(".").pop();
  let s = t.replace("{entityId}", r).replace("{propertyKey}", i).replace("{rand}", Yt()).replace("{file}", e.name).replace("{file.type}", e.type).replace("{path}", a);
  if (o) {
    s = s.replace("{file.ext}", o);
    const l = e.name.replace(`.${o}`, "");
    s = s.replace("{file.name}", l);
  }
  return s || (s = Yt() + "_" + e.name), s;
}
function qi({
  entityId: e,
  entityValues: t,
  path: r,
  value: i,
  property: a,
  propertyKey: o,
  storageSource: s,
  disabled: l,
  onChange: c
}) {
  const d = a.dataType === "string" ? a.storage : a.dataType === "array" && a.of.dataType === "string" ? a.of.storage : void 0, A = a.dataType === "array";
  if (!d)
    throw Error("Storage meta must be specified");
  const u = d?.metadata, p = A ? "small" : "regular", h = d?.imageCompression, f = (A ? i ?? [] : i ? [i] : []).map((C) => ({
    id: Vn(),
    storagePathOrDownloadUrl: C,
    metadata: u,
    size: p
  })), [g, m] = M(i), [v, b] = M(f);
  z(() => {
    Ae(g, i) || (m(i), b(f));
  }, [f, i, g]);
  const x = w(async (C) => {
    if (d.fileName) {
      const S = await td(d.fileName, d, t, e, r, a, C, o);
      if (!S || S.length === 0)
        throw Error("You need to return a valid filename");
      return S;
    }
    return Yt() + "_" + C.name;
  }, [e, t, r, a, o, d]), y = w((C) => nd(d.storagePath, d, t, e, r, a, C, o) ?? "/", [e, t, r, a, o, d]), k = w(async (C, S, D) => {
    console.debug("onFileUploadComplete", C, S);
    let P = C;
    d.storeUrl && (P = (await s.getDownloadURL(C)).url), d.postProcess && (P = await d.postProcess(P));
    let R;
    S.storagePathOrDownloadUrl = P, S.metadata = D, R = [...v], R = Fo(R), b(R);
    const $ = R.filter((L) => !!L.storagePathOrDownloadUrl).map((L) => L.storagePathOrDownloadUrl);
    c(A ? $ : $ ? $[0] : null);
  }, [v, A, c, d, s]), I = w(async (C) => {
    if (!C.length || l)
      return;
    let S;
    if (A)
      S = [
        ...v,
        ...await Promise.all(C.map(async (D) => (h && tr(D) && (D = await Do(D, h)), {
          id: Vn(),
          file: D,
          fileName: await x(D),
          metadata: u,
          size: p
        })))
      ];
    else {
      let D = C[0];
      h && tr(D) && (D = await Do(D, h)), S = [{
        id: Vn(),
        file: D,
        fileName: await x(D),
        metadata: u,
        size: p
      }];
    }
    S = Fo(S), b(S);
  }, [l, x, v, u, A, p]);
  return {
    internalValue: v,
    setInternalValue: b,
    storage: d,
    fileNameBuilder: x,
    storagePathBuilder: y,
    onFileUploadComplete: k,
    onFilesAdded: I,
    multipleFilesSupported: A
  };
}
function Fo(e) {
  return e.filter(
    (t, r) => (e.map((i) => i.storagePathOrDownloadUrl).indexOf(t.storagePathOrDownloadUrl) === r || !t.storagePathOrDownloadUrl) && (e.map((i) => i.file).indexOf(t.file) === r || !t.file)
  );
}
function Vn() {
  return Math.floor(Math.random() * Math.floor(Number.MAX_SAFE_INTEGER));
}
const Ro = {
  "image/jpeg": "JPEG",
  "image/png": "PNG",
  "image/webp": "WEBP"
}, tr = (e) => Ro[e.type] ? Ro[e.type] : null, rd = 100, Do = (e, t) => new Promise((r) => {
  const i = t.quality === void 0 ? rd : t.quality, a = i >= 0 && i <= 100 ? i : 100;
  Ul.imageFileResizer(
    e,
    t.maxWidth || Number.MAX_VALUE,
    t.maxHeight || Number.MAX_VALUE,
    tr(e),
    a,
    0,
    (o) => r(o),
    "file"
  );
});
function Xi({
  storagePath: e,
  entry: t,
  metadata: r,
  onFileUploadComplete: i,
  imageSize: a,
  simple: o
}) {
  const s = _t(), l = rt(), [c, d] = Q.useState(), [A, u] = Q.useState(!1), p = Q.useRef(!1), h = Q.useRef(!1), f = w((g, m) => {
    h.current || (h.current = !0, d(void 0), u(!0), s.uploadFile({
      file: g,
      fileName: m,
      path: e,
      metadata: r
    }).then(async ({ path: v }) => {
      console.debug("Upload successful"), await i(v, t, r), p.current && u(!1);
    }).catch((v) => {
      console.error("Upload error", v), p.current && (d(v), u(!1), l.open({
        type: "error",
        message: "Error uploading file: " + v.message
      }));
    }).finally(() => {
      h.current = !1;
    }));
  }, [t, r, i, s, e]);
  return Q.useEffect(() => (p.current = !0, t.file && f(t.file, t.fileName), () => {
    p.current = !1;
  }), [t.file, t.fileName, f]), o ? /* @__PURE__ */ n(B, { m: 1, sx: {
    width: a,
    height: a
  }, children: A && /* @__PURE__ */ n(Ue, { variant: "rectangular", sx: {
    width: a,
    height: a
  } }) }) : /* @__PURE__ */ n(B, { m: 1, children: /* @__PURE__ */ E(
    St,
    {
      elevation: 0,
      sx: {
        padding: 1,
        boxSizing: "border-box",
        minWidth: a,
        minHeight: a
      },
      variant: "outlined",
      children: [
        A && /* @__PURE__ */ n(Ue, { variant: "rectangular", sx: {
          width: "100%",
          height: "100%"
        } }),
        c && /* @__PURE__ */ n(
          xe,
          {
            title: "Error uploading file",
            error: c
          }
        )
      ]
    }
  ) });
}
function Ki({
  name: e,
  property: t,
  value: r,
  entity: i,
  onRemove: a,
  disabled: o,
  size: s
}) {
  return /* @__PURE__ */ n(B, { m: 1, position: "relative", children: /* @__PURE__ */ E(
    St,
    {
      elevation: 0,
      sx: {
        padding: 1,
        boxSizing: "border-box",
        minWidth: s === "regular" ? 220 : 118,
        minHeight: s === "regular" ? 220 : 118
      },
      variant: "outlined",
      children: [
        !o && /* @__PURE__ */ n(
          B,
          {
            sx: (l) => ({
              position: "absolute",
              borderRadius: "9999px",
              top: -8,
              right: -8,
              zIndex: 1,
              backgroundColor: l.palette.background.paper
            }),
            children: /* @__PURE__ */ n(
              de,
              {
                title: "Remove",
                children: /* @__PURE__ */ n(
                  ne,
                  {
                    size: "small",
                    onClick: (l) => {
                      l.stopPropagation(), a(r);
                    },
                    children: /* @__PURE__ */ n(Ai, { fontSize: "small" })
                  }
                )
              }
            )
          }
        ),
        r && /* @__PURE__ */ n(ue, { children: /* @__PURE__ */ n(
          Re,
          {
            propertyKey: e,
            value: r,
            property: t,
            entity: i,
            size: s
          }
        ) })
      ]
    }
  ) });
}
const wt = (e) => e.palette.mode === "light" ? "rgb(240 240 240)" : "rgb(39 39 41)", ea = (e) => e.palette.mode === "light" ? "rgb(232 232 232)" : "rgb(49,49,50)", mt = "StorageUploadField", Pe = {
  dropZone: `${mt}-dropZone`,
  disabled: `${mt}-disabled`,
  nonActiveDrop: `${mt}-nonActiveDrop`,
  activeDrop: `${mt}-activeDrop`,
  acceptDrop: `${mt}-acceptDrop`,
  rejectDrop: `${mt}-rejectDrop`
}, od = We(B)(({ theme: e }) => ({
  [`&.${Pe.dropZone}`]: {
    position: "relative",
    paddingTop: "2px",
    border: "2px solid transparent",
    minHeight: "254px",
    outline: 0,
    borderTopLeftRadius: `${e.shape.borderRadius}px`,
    borderTopRightRadius: `${e.shape.borderRadius}px`,
    backgroundColor: wt(e),
    borderBottom: e.palette.mode === "light" ? "1px solid rgba(0, 0, 0, 0.42)" : "1px solid rgba(255, 255, 255, 0.7)",
    boxSizing: "border-box",
    transition: "border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    "&:focus": {
      borderBottom: `2px solid ${e.palette.primary.main}`
    }
  },
  [`&.${Pe.disabled}`]: {
    backgroundColor: "rgba(0, 0, 0, 0.12)",
    color: e.palette.mode === "light" ? "rgba(0, 0, 0, 0.38)" : "rgba(255, 255, 255, 0.38)",
    borderBottom: `1px dotted ${e.palette.grey[400]}`
  },
  [`&.${Pe.nonActiveDrop}`]: {
    "&:hover": {
      backgroundColor: ea(e)
    }
  },
  [`&.${Pe.activeDrop}`]: {
    paddingTop: "0px",
    boxSizing: "border-box",
    border: "2px solid"
  },
  [`&.${Pe.acceptDrop}`]: {
    transition: "background-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
    background: "repeating-linear-gradient( 45deg, rgba(0, 0, 0, 0.09), rgba(0, 0, 0, 0.09) 10px, rgba(0, 0, 0, 0.12) 10px, rgba(0, 0, 0, 0.12) 20px) !important",
    border: "2px solid",
    borderColor: e.palette.success.light
  },
  [`&.${Pe.rejectDrop}`]: {
    border: "2px solid",
    borderColor: e.palette.error.light
  }
}));
function Qo({
  propertyKey: e,
  value: t,
  setValue: r,
  error: i,
  showError: a,
  autoFocus: o,
  tableMode: s,
  property: l,
  includeDescription: c,
  context: d,
  isSubmitting: A
}) {
  const u = _t(), p = Jt(l) || !!l.disabled || A, {
    internalValue: h,
    setInternalValue: f,
    onFilesAdded: g,
    storage: m,
    onFileUploadComplete: v,
    storagePathBuilder: b,
    multipleFilesSupported: x
  } = qi({
    entityValues: d.values,
    entityId: d.entityId,
    path: d.path,
    property: l,
    propertyKey: e,
    value: t,
    storageSource: u,
    disabled: p,
    onChange: r
  });
  Te({
    property: l,
    value: t,
    setValue: r
  });
  const y = {
    id: d.entityId,
    values: d.values,
    path: d.path
  };
  return /* @__PURE__ */ E(
    we,
    {
      fullWidth: !0,
      required: l.validation?.required,
      error: a,
      children: [
        !s && /* @__PURE__ */ n(Ee, { filled: !0, children: /* @__PURE__ */ n(Qe, { property: l }) }),
        /* @__PURE__ */ n(
          ad,
          {
            value: h,
            name: e,
            disabled: p,
            autoFocus: o,
            property: l,
            onChange: r,
            setInternalValue: f,
            onFilesAdded: g,
            entity: y,
            onFileUploadComplete: v,
            storagePathBuilder: b,
            storage: m,
            multipleFilesSupported: x
          }
        ),
        c && /* @__PURE__ */ n(De, { property: l }),
        a && /* @__PURE__ */ n(Ee, { children: i })
      ]
    }
  );
}
function id({
  storage: e,
  disabled: t,
  isDraggingOver: r,
  onFilesAdded: i,
  multipleFilesSupported: a,
  droppableProvided: o,
  autoFocus: s,
  internalValue: l,
  property: c,
  entity: d,
  onClear: A,
  metadata: u,
  storagePathBuilder: p,
  onFileUploadComplete: h,
  size: f,
  name: g,
  helpText: m
}) {
  const v = rt(), {
    getRootProps: b,
    getInputProps: x,
    isDragActive: y,
    isDragAccept: k,
    isDragReject: I
  } = hi(
    {
      accept: e.acceptedFiles ? e.acceptedFiles.map((C) => ({ [C]: [] })).reduce((C, S) => ({ ...C, ...S }), {}) : void 0,
      disabled: t || r,
      noDragEventsBubbling: !0,
      maxSize: e.maxSize,
      onDrop: i,
      onDropRejected: (C, S) => {
        for (const D of C)
          for (const P of D.errors)
            v.open({
              type: "error",
              message: `Error uploading file: File is larger than ${e.maxSize} bytes`
            });
      }
    }
  );
  return /* @__PURE__ */ E(
    od,
    {
      ...b(),
      className: zl(Pe.dropZone, {
        [Pe.nonActiveDrop]: !y,
        [Pe.activeDrop]: y,
        [Pe.rejectDrop]: I,
        [Pe.acceptDrop]: k,
        [Pe.disabled]: t
      }),
      sx: {
        display: a && l.length ? void 0 : "flex",
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ E(
          B,
          {
            ...o.droppableProps,
            ref: o.innerRef,
            sx: {
              display: "flex",
              alignItems: "center",
              overflow: a && l.length ? "auto" : void 0,
              minHeight: a && l.length ? 180 : 250,
              p: 1,
              "&::-webkit-scrollbar": {
                display: "none"
              }
            },
            children: [
              /* @__PURE__ */ n(
                "input",
                {
                  autoFocus: s,
                  ...x()
                }
              ),
              l.map((C, S) => {
                let D;
                return C.storagePathOrDownloadUrl ? D = /* @__PURE__ */ n(
                  Ki,
                  {
                    name: `storage_preview_${C.storagePathOrDownloadUrl}`,
                    property: c,
                    disabled: t,
                    entity: d,
                    value: C.storagePathOrDownloadUrl,
                    onRemove: A,
                    size: C.size
                  }
                ) : C.file && (D = /* @__PURE__ */ n(
                  Xi,
                  {
                    entry: C,
                    metadata: u,
                    storagePath: p(C.file),
                    onFileUploadComplete: h,
                    imageSize: f === "regular" ? 220 : 118,
                    simple: !1
                  }
                )), /* @__PURE__ */ n(
                  gi,
                  {
                    draggableId: `array_field_${g}_${C.id}`,
                    index: S,
                    children: (P, R) => /* @__PURE__ */ n(
                      B,
                      {
                        ref: P.innerRef,
                        ...P.draggableProps,
                        ...P.dragHandleProps,
                        style: P.draggableProps.style,
                        sx: ($) => ({
                          borderRadius: `${$.shape.borderRadius}px`
                        }),
                        children: D
                      }
                    )
                  },
                  `array_field_${g}_${C.id}`
                );
              }),
              o.placeholder
            ]
          }
        ),
        /* @__PURE__ */ n(
          B,
          {
            sx: {
              flexGrow: 1,
              minHeight: 38,
              boxSizing: "border-box",
              m: 2
            },
            children: /* @__PURE__ */ n(
              X,
              {
                align: "center",
                variant: "label",
                children: m
              }
            )
          }
        )
      ]
    }
  );
}
function ad({
  property: e,
  name: t,
  value: r,
  setInternalValue: i,
  onChange: a,
  multipleFilesSupported: o,
  onFileUploadComplete: s,
  disabled: l,
  onFilesAdded: c,
  autoFocus: d,
  storage: A,
  entity: u,
  storagePathBuilder: p
}) {
  if (o) {
    const y = e;
    if (y.of) {
      if (Array.isArray(y.of) || y.of.dataType !== "string")
        throw Error("Storage field using array must be of data type string");
    } else
      throw Error("Storage field using array must be of data type string");
  }
  const h = A?.metadata, f = o ? "small" : "regular", g = w((y, k) => {
    if (!o)
      return;
    const I = [...r], C = I[y];
    I.splice(y, 1), I.splice(k, 0, C), i(I);
    const S = I.filter((D) => !!D.storagePathOrDownloadUrl).map((D) => D.storagePathOrDownloadUrl);
    a(S);
  }, [o, a, i, r]), m = w((y) => {
    y.destination && g(y.source.index, y.destination.index);
  }, [g]), v = w((y) => {
    if (o) {
      const k = r.filter((I) => I.storagePathOrDownloadUrl !== y);
      a(k.filter((I) => !!I.storagePathOrDownloadUrl).map((I) => I.storagePathOrDownloadUrl)), i(k);
    } else
      a(null), i([]);
  }, [r, o, a]), b = o ? "Drag 'n' drop some files here, or click to select files" : "Drag 'n' drop a file here, or click to select one", x = o ? e.of : e;
  return /* @__PURE__ */ n(ui, { onDragEnd: m, children: /* @__PURE__ */ n(
    fi,
    {
      droppableId: `droppable_${t}`,
      direction: "horizontal",
      renderClone: (y, k, I) => {
        const C = r[I.source.index];
        return /* @__PURE__ */ n(
          B,
          {
            ref: y.innerRef,
            ...y.draggableProps,
            ...y.dragHandleProps,
            style: y.draggableProps.style,
            sx: (S) => ({
              borderRadius: S.shape.borderRadius
            }),
            children: /* @__PURE__ */ n(
              Ki,
              {
                name: `storage_preview_${C.storagePathOrDownloadUrl}`,
                property: x,
                disabled: !0,
                entity: u,
                value: C.storagePathOrDownloadUrl,
                onRemove: v,
                size: C.size
              }
            )
          }
        );
      },
      children: (y, k) => /* @__PURE__ */ n(
        id,
        {
          storage: A,
          disabled: l,
          isDraggingOver: k.isDraggingOver,
          droppableProvided: y,
          onFilesAdded: c,
          multipleFilesSupported: o,
          autoFocus: d,
          internalValue: r,
          property: x,
          entity: u,
          onClear: v,
          metadata: h,
          storagePathBuilder: p,
          onFileUploadComplete: s,
          size: f,
          name: t,
          helpText: b
        }
      )
    }
  ) });
}
function Mt({
  propertyKey: e,
  value: t,
  setValue: r,
  error: i,
  showError: a,
  disabled: o,
  autoFocus: s,
  property: l,
  includeDescription: c,
  allowInfinity: d,
  shouldAlwaysRerender: A
}) {
  let u;
  l.dataType === "string" && (u = l.multiline), Te({
    property: l,
    value: t,
    setValue: r
  });
  const p = w(() => {
    r(null);
  }, [r]), h = Boolean(u), g = (t ?? (l.dataType === "string" ? "" : t === 0 ? 0 : "")) === 1 / 0, m = !g && l.dataType === "number" ? "number" : void 0, v = w((b) => {
    if (!b)
      r(
        null
      );
    else if (m === "number") {
      const x = parseFloat(b);
      r(
        x
      );
    } else
      r(
        b
      );
  }, [m, r]);
  return /* @__PURE__ */ n(Z, { children: /* @__PURE__ */ E(
    we,
    {
      variant: "filled",
      error: a,
      disabled: g,
      sx: {
        "& .MuiInputLabel-shrink": {
          mt: -1 / 4
        }
      },
      fullWidth: !0,
      children: [
        /* @__PURE__ */ n(It, { sx: { top: "4px" }, children: /* @__PURE__ */ n(Qe, { property: l }) }),
        /* @__PURE__ */ n(
          Va,
          {
            sx: {
              minHeight: "64px"
            },
            autoFocus: s,
            type: m,
            multiline: h,
            inputProps: {
              rows: 4
            },
            endAdornment: l.clearable && /* @__PURE__ */ n(
              ne,
              {
                sx: {
                  position: "absolute",
                  right: "16px"
                },
                onClick: p,
                children: /* @__PURE__ */ n(qe, {})
              }
            ),
            value: g ? "Infinity" : t ?? "",
            disabled: o,
            onChange: (b) => {
              v(b.target.value);
            }
          }
        ),
        /* @__PURE__ */ E(B, { display: "flex", children: [
          /* @__PURE__ */ E(B, { flexGrow: 1, children: [
            a && /* @__PURE__ */ n(Ee, { children: i }),
            c && /* @__PURE__ */ n(De, { property: l })
          ] }),
          d && /* @__PURE__ */ n(
            pn,
            {
              checked: g,
              style: { marginRight: 0 },
              labelPlacement: "start",
              control: /* @__PURE__ */ n(
                mn,
                {
                  size: "small",
                  type: "checkbox",
                  onChange: (b) => {
                    v(
                      b.target.checked ? 1 / 0 : void 0
                    );
                  }
                }
              ),
              disabled: o,
              label: /* @__PURE__ */ n(X, { variant: "caption", children: "Set value to Infinity" })
            }
          )
        ] })
      ]
    }
  ) });
}
const sd = Q.forwardRef(function({
  propertyKey: t,
  value: r,
  setValue: i,
  error: a,
  showError: o,
  autoFocus: s,
  disabled: l,
  touched: c,
  property: d,
  includeDescription: A,
  shouldAlwaysRerender: u
}, p) {
  Te({
    property: d,
    value: r,
    setValue: i
  });
  const [h, f] = M(s);
  return /* @__PURE__ */ n(Z, { children: /* @__PURE__ */ E(we, { fullWidth: !0, children: [
    /* @__PURE__ */ n(
      pn,
      {
        sx: (g) => ({
          color: h ? g.palette.primary.main : g.palette.text.secondary,
          justifyContent: "space-between",
          margin: 0,
          width: "100%",
          minHeight: "64px",
          paddingLeft: "16px",
          paddingRight: "24px",
          boxSizing: "border-box",
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          backgroundColor: wt(g),
          borderTopLeftRadius: `${g.shape.borderRadius}px`,
          borderTopRightRadius: `${g.shape.borderRadius}px`,
          transition: "background-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
          "&::before": {
            borderBottom: h ? g.palette.mode === "light" ? "1px solid rgba(255, 255, 255, 0.7)" : "1px solid rgba(0, 0, 0, 0.87)" : g.palette.mode === "light" ? "1px solid rgba(0, 0, 0, 0.42)" : "1px solid rgba(255, 255, 255, 0.7)",
            left: 0,
            bottom: 0,
            content: '"\\00a0"',
            position: "absolute",
            right: 0,
            transition: "border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            pointerEvents: "none"
          },
          "&::after": {
            content: '""',
            transition: "transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
            left: 0,
            bottom: 0,
            position: "absolute",
            right: 0,
            transform: h ? "scaleX(1)" : "scaleX(0)",
            borderBottom: `2px solid ${g.palette.primary.main}`,
            pointerEvents: h ? "none" : void 0
          },
          "&:hover": {
            backgroundColor: ea(g)
          }
        }),
        onClick: (g) => f(!0),
        labelPlacement: "start",
        checked: Boolean(r),
        inputRef: p,
        control: /* @__PURE__ */ n(
          mn,
          {
            type: "checkbox",
            color: "secondary",
            autoFocus: s,
            disabled: l,
            onFocus: (g) => f(!0),
            onBlur: (g) => f(!1),
            onChange: (g) => {
              f(!0), i(
                g.target.checked
              );
            }
          }
        ),
        disabled: l,
        label: /* @__PURE__ */ n(
          Qe,
          {
            property: d
          }
        )
      }
    ),
    A && /* @__PURE__ */ n(De, { property: d }),
    o && /* @__PURE__ */ n(Ee, { children: a })
  ] }) });
});
function ld({
  propertyKey: e,
  value: t,
  setValue: r,
  autoFocus: i,
  error: a,
  showError: o,
  disabled: s,
  touched: l,
  property: c,
  includeDescription: d,
  shouldAlwaysRerender: A
}) {
  const u = t || null;
  Te({
    property: c,
    value: t,
    setValue: r
  });
  const p = w(() => {
    r(null);
  }, [r]), h = c.mode === void 0 || c.mode === "date_time" ? wr : br;
  return /* @__PURE__ */ E(Z, { children: [
    /* @__PURE__ */ n(
      h,
      {
        autoFocus: i,
        value: u,
        renderInput: (f) => /* @__PURE__ */ n(
          nt,
          {
            ...f,
            fullWidth: !0,
            sx: {
              minHeight: "64px"
            },
            label: /* @__PURE__ */ n(Qe, { property: c }),
            InputProps: {
              ...f.InputProps,
              sx: {
                minHeight: "64px"
              },
              endAdornment: /* @__PURE__ */ E(
                B,
                {
                  sx: { pr: 2, gap: 2 },
                  children: [
                    c.clearable && /* @__PURE__ */ n(
                      ne,
                      {
                        sx: {
                          position: "absolute",
                          right: "56px",
                          top: "12px"
                        },
                        onClick: p,
                        children: /* @__PURE__ */ n(qe, {})
                      }
                    ),
                    f.InputProps?.endAdornment
                  ]
                }
              )
            },
            error: o,
            variant: "filled",
            helperText: o ? a : null
          }
        ),
        disabled: s,
        onChange: (f) => r(f)
      }
    ),
    d && /* @__PURE__ */ n(De, { property: c })
  ] });
}
function cd(e) {
  return typeof e.property.path != "string" ? /* @__PURE__ */ n(ta, { ...e }) : /* @__PURE__ */ n(dd, { ...e });
}
function dd({
  propertyKey: e,
  value: t,
  setValue: r,
  error: i,
  showError: a,
  disabled: o,
  touched: s,
  autoFocus: l,
  property: c,
  includeDescription: d,
  context: A,
  shouldAlwaysRerender: u
}) {
  if (!c.path)
    throw new Error("Property path is required for ReferenceFieldBinding");
  const p = re();
  Te({
    property: c,
    value: t,
    setValue: r
  });
  const h = At(), f = Ie(), g = ie(() => f.getCollection(c.path), [c.path, f]);
  if (!g)
    throw Error(`Couldn't find the corresponding collection for the path: ${c.path}`);
  const m = c.path, v = t && t instanceof ut, {
    entity: b,
    dataLoading: x,
    dataLoadingError: y
  } = Cr({
    path: v ? t.path : c.path,
    entityId: v ? t.id : void 0,
    collection: g,
    useCache: !0
  }), k = w((R) => {
    o || r(R ? gn(R) : null);
  }, [o, r]), I = Sr(
    {
      multiselect: !1,
      path: m,
      collection: g,
      onSingleEntitySelected: k,
      forceFilter: c.forceFilter
    }
  ), C = w(() => {
    I.open();
  }, [I]), S = w((R) => {
    R.stopPropagation(), r(null), I.close();
  }, [I, r]), D = w((R) => {
    R.stopPropagation(), b && (p.onAnalyticsEvent?.("entity_click_from_reference", {
      path: b.path,
      entityId: b.id
    }), h.open({
      entityId: b.id,
      path: m,
      updateUrl: !0
    }));
  }, [b, m, h]), P = w((R) => {
    const $ = b && !b.values;
    let L;
    if (!R)
      L = /* @__PURE__ */ n(
        xe,
        {
          error: "The specified collection does not exist. Check console"
        }
      );
    else if ($)
      L = /* @__PURE__ */ n(de, { title: t && t.path, children: /* @__PURE__ */ E(
        B,
        {
          display: "flex",
          alignItems: "center",
          p: 1,
          flexGrow: 1,
          children: [
            /* @__PURE__ */ n(pr, { fontSize: "small", color: "error" }),
            /* @__PURE__ */ E(B, { marginLeft: 1, children: [
              "Missing reference ",
              b && b.id
            ] })
          ]
        }
      ) });
    else if (v) {
      const K = Aa(R, p.fields, c.previewProperties, 3);
      L = /* @__PURE__ */ n(
        B,
        {
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          ml: 1,
          mr: 1,
          children: K && K.map((V) => {
            const W = R.properties[V];
            return W ? /* @__PURE__ */ n(
              B,
              {
                mt: 0.5,
                mb: 0.5,
                children: /* @__PURE__ */ n(ue, { children: b ? /* @__PURE__ */ n(
                  Re,
                  {
                    propertyKey: V,
                    value: b.values[V],
                    property: W,
                    entity: b,
                    size: "tiny"
                  }
                ) : /* @__PURE__ */ n(
                  Et,
                  {
                    property: W,
                    size: "tiny"
                  }
                ) })
              },
              `reference_previews_${V}`
            ) : null;
          })
        }
      );
    } else
      L = /* @__PURE__ */ E(
        B,
        {
          p: 1,
          onClick: o ? void 0 : C,
          justifyContent: "center",
          display: "flex",
          children: [
            /* @__PURE__ */ n(X, { variant: "label", sx: (K) => ({
              flexGrow: 1,
              textAlign: "center"
            }), children: "No value set" }),
            !o && /* @__PURE__ */ n(
              ae,
              {
                variant: "outlined",
                color: "primary",
                children: "Set"
              }
            )
          ]
        }
      );
    return /* @__PURE__ */ n(
      B,
      {
        onClick: o ? void 0 : C,
        display: "flex",
        children: /* @__PURE__ */ E(
          B,
          {
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            children: [
              /* @__PURE__ */ E(
                B,
                {
                  display: "flex",
                  flexDirection: "row",
                  flexGrow: 1,
                  children: [
                    /* @__PURE__ */ n(B, { flexGrow: 1, children: /* @__PURE__ */ n(Qe, { property: c, small: !0 }) }),
                    b && /* @__PURE__ */ n(
                      B,
                      {
                        alignSelf: "center",
                        m: 1,
                        children: /* @__PURE__ */ n(de, { title: t && t.path, children: /* @__PURE__ */ n(
                          X,
                          {
                            variant: "caption",
                            className: "mono",
                            children: b.id
                          }
                        ) })
                      }
                    ),
                    !$ && b && t && /* @__PURE__ */ n(B, { children: /* @__PURE__ */ n(de, { title: `See details for ${b.id}`, children: /* @__PURE__ */ n("span", { children: /* @__PURE__ */ n(
                      ne,
                      {
                        onClick: D,
                        size: "large",
                        children: /* @__PURE__ */ n(mr, {})
                      }
                    ) }) }) }),
                    t && /* @__PURE__ */ n(B, { children: /* @__PURE__ */ n(de, { title: "Clear", children: /* @__PURE__ */ n("span", { children: /* @__PURE__ */ n(
                      ne,
                      {
                        disabled: o,
                        onClick: o ? void 0 : S,
                        size: "large",
                        children: /* @__PURE__ */ n(qe, {})
                      }
                    ) }) }) })
                  ]
                }
              ),
              L
            ]
          }
        )
      }
    );
  }, [S, o, b, C, c, D, v, t]);
  return /* @__PURE__ */ E(we, { error: a, fullWidth: !0, children: [
    /* @__PURE__ */ n(X, { variant: "label", sx: (R) => ({
      elevation: 0,
      width: "100%",
      padding: R.spacing(1),
      position: "relative",
      transition: "background-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
      borderTopLeftRadius: `${R.shape.borderRadius}px`,
      borderTopRightRadius: `${R.shape.borderRadius}px`,
      backgroundColor: o ? "rgba(0, 0, 0, 0.12)" : R.palette.mode === "light" ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)",
      "&::before": {
        borderBottom: o ? R.palette.mode === "light" ? "1px dotted rgba(0, 0, 0, 0.42)" : "1px dotted rgba(255, 255, 255, 0.7)" : R.palette.mode === "light" ? "1px solid rgba(0, 0, 0, 0.42)" : "1px solid rgba(255, 255, 255, 0.7)",
        left: 0,
        bottom: 0,
        content: '"\\00a0"',
        position: "absolute",
        right: 0,
        transition: "border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        pointerEvents: "none"
      },
      "&::after": {
        content: '""',
        transition: "transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
        left: 0,
        bottom: 0,
        position: "absolute",
        right: 0,
        transform: "scaleX(0)",
        borderBottom: o ? `2px dotted ${R.palette.primary.main}` : `2px solid ${R.palette.primary.main}`
      },
      "&:hover": {
        cursor: o ? void 0 : "pointer",
        backgroundColor: o ? "rgba(0, 0, 0, 0.12)" : R.palette.mode === "light" ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)"
      },
      color: o ? R.palette.mode === "light" ? "rgba(0, 0, 0, 0.38)" : "rgba(255, 255, 255, 0.38)" : void 0,
      fontWeight: R.typography.fontWeightMedium
    }), children: g && P(g) }),
    d && /* @__PURE__ */ n(De, { property: c }),
    a && /* @__PURE__ */ n(Ee, { children: i })
  ] });
}
class ue extends Q.Component {
  constructor(t) {
    super(t), this.state = { error: null };
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  componentDidCatch(t, r) {
    console.error(t);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ E(
      B,
      {
        display: "flex",
        flexDirection: "column",
        m: 0.5,
        children: [
          /* @__PURE__ */ E(
            B,
            {
              display: "flex",
              alignItems: "center",
              m: 0.5,
              children: [
                /* @__PURE__ */ n(pr, { color: "error", fontSize: "small" }),
                /* @__PURE__ */ n(B, { marginLeft: 1, children: "Error" })
              ]
            }
          ),
          /* @__PURE__ */ n(X, { variant: "caption", children: this.state.error?.message ?? "See the error in the console" })
        ]
      }
    ) : this.props.children;
  }
}
function ta({
  propertyKey: e,
  value: t,
  setValue: r,
  error: i,
  showError: a,
  isSubmitting: o,
  touched: s,
  tableMode: l,
  property: c,
  includeDescription: d,
  context: A
}) {
  const u = {
    id: A.entityId,
    values: A.values,
    path: A.path
  };
  return /* @__PURE__ */ E(we, { fullWidth: !0, error: a, children: [
    !l && /* @__PURE__ */ n(Ee, { filled: !0, children: /* @__PURE__ */ n(Qe, { property: c }) }),
    /* @__PURE__ */ n(
      St,
      {
        sx: (p) => ({
          minHeight: "56px",
          elevation: 0,
          padding: p.spacing(2),
          [p.breakpoints.up("md")]: {
            padding: p.spacing(3)
          }
        }),
        variant: "outlined",
        children: /* @__PURE__ */ n(ue, { children: /* @__PURE__ */ n(
          Re,
          {
            propertyKey: e,
            value: t,
            property: c,
            entity: u,
            size: "regular"
          }
        ) })
      }
    ),
    a && typeof i == "string" && /* @__PURE__ */ n(Ee, { children: i }),
    d && /* @__PURE__ */ n(De, { property: c })
  ] });
}
const Ad = function({
  propertyKey: t,
  property: r,
  context: i,
  includeDescription: a,
  underlyingValueHasChanged: o,
  disabled: s,
  tableMode: l,
  partOfArray: c,
  autoFocus: d,
  shouldAlwaysRerender: A
}) {
  const u = re();
  let p;
  const h = $e({
    propertyOrBuilder: r,
    values: i.values,
    path: i.path,
    entityId: i.entityId,
    fields: u.fields
  });
  if (h === null)
    return /* @__PURE__ */ n(Z, {});
  if (Jt(h))
    p = ta;
  else if (h.Field)
    typeof h.Field == "function" && (p = h.Field);
  else {
    const f = Pr(h);
    if (!f)
      throw new Error(`INTERNAL: Could not find field config for property ${t}`);
    p = f.Field;
  }
  if (p) {
    const f = {
      propertyKey: t,
      property: h,
      includeDescription: a,
      underlyingValueHasChanged: o,
      context: i,
      disabled: s,
      tableMode: l,
      partOfArray: c,
      autoFocus: d,
      shouldAlwaysRerender: A
    }, g = A || h.Field ? Ws : li;
    return /* @__PURE__ */ n(
      g,
      {
        required: h.validation?.required,
        name: `${t}`,
        children: (m) => /* @__PURE__ */ n(
          ud,
          {
            Component: p,
            componentProps: f,
            fieldProps: m
          }
        )
      }
    );
  }
  return /* @__PURE__ */ n("div", { children: `Currently the field ${h.dataType} is not supported` });
}, Rt = Q.memo(Ad, (e, t) => Ae(e.context.values, t.context.values) && (typeof e.property == "function" && typeof t.property == "function" || Ae(e.property, t.property)) && e.disabled === t.disabled);
function ud({
  Component: e,
  componentProps: {
    propertyKey: t,
    property: r,
    includeDescription: i,
    underlyingValueHasChanged: a,
    tableMode: o,
    partOfArray: s,
    autoFocus: l,
    context: c,
    disabled: d,
    shouldAlwaysRerender: A
  },
  fieldProps: u
}) {
  const p = r.customProps, h = u.field.value, f = u.meta.initialValue, g = Zn(u.form.errors, t), m = Zn(u.form.touched, t), v = g && (u.form.submitCount > 0 || r.validation?.unique) && (!Array.isArray(g) || !!g.filter((y) => !!y).length), b = u.form.isSubmitting;
  return /* @__PURE__ */ E(ue, { children: [
    /* @__PURE__ */ n(e, { ...{
      propertyKey: t,
      value: h,
      initialValue: f,
      setValue: (y) => {
        u.form.setFieldTouched(t, !0, !1), u.form.setFieldValue(t, y);
      },
      error: g,
      touched: m,
      showError: v,
      isSubmitting: b,
      includeDescription: i ?? !0,
      property: r,
      disabled: d ?? !1,
      underlyingValueHasChanged: a ?? !1,
      tableMode: o ?? !1,
      partOfArray: s ?? !1,
      autoFocus: l ?? !1,
      customProps: p,
      context: c,
      shouldAlwaysRerender: A ?? !0
    } }),
    a && !b && /* @__PURE__ */ n(Ee, { children: "This value has been updated elsewhere" })
  ] });
}
function fd({
  propertyKey: e,
  value: t,
  showError: r,
  disabled: i,
  property: a,
  setValue: o,
  tableMode: s,
  includeDescription: l,
  underlyingValueHasChanged: c,
  autoFocus: d,
  shouldAlwaysRerender: A,
  context: u
}) {
  const p = a.pickOnlySomeKeys || !1, h = (a.expanded === void 0 ? !0 : a.expanded) || d;
  if (!a.properties)
    throw Error(`You need to specify a 'properties' prop (or specify a custom field) in your map property ${e}`);
  let f;
  p ? t ? f = jc(
    a.properties,
    ...Object.keys(t).filter((b) => b in a.properties)
  ) : f = {} : f = a.properties, Te({
    property: a,
    value: t,
    setValue: o
  });
  const g = w(() => {
    const b = Object.keys(a.properties).filter((y) => !t || !(y in t)), x = (y) => {
      o({
        ...t,
        [y.target.value]: null
      });
    };
    return b.length ? /* @__PURE__ */ n(B, { m: 1, children: /* @__PURE__ */ E(we, { fullWidth: !0, children: [
      /* @__PURE__ */ n(It, { children: "Add property" }),
      /* @__PURE__ */ n(
        Je,
        {
          variant: "standard",
          value: "",
          disabled: i,
          onChange: x,
          children: b.map((y) => /* @__PURE__ */ n(Ge, { value: y, children: a.properties[y].name || y }, y))
        }
      )
    ] }) }) : /* @__PURE__ */ n(Z, {});
  }, [i, a.properties, o, t]), m = /* @__PURE__ */ E(Z, { children: [
    /* @__PURE__ */ n(oe, { container: !0, spacing: 2, children: Object.entries(f).filter(([b, x]) => !Tr(x)).map(
      ([b, x], y) => {
        const k = {
          propertyKey: `${e}.${b}`,
          disabled: i,
          property: x,
          includeDescription: l,
          underlyingValueHasChanged: c,
          context: u,
          tableMode: !1,
          partOfArray: !1,
          autoFocus: d && y === 0,
          shouldAlwaysRerender: x.fromBuilder
        };
        return /* @__PURE__ */ n(
          oe,
          {
            item: !0,
            sm: 12,
            xs: 12,
            children: /* @__PURE__ */ n(Rt, { ...k })
          },
          `map-${e}-${y}`
        );
      }
    ) }),
    p && g()
  ] });
  return /* @__PURE__ */ E(we, { fullWidth: !0, error: r, children: [
    !s && /* @__PURE__ */ n(
      Zt,
      {
        expanded: h,
        title: /* @__PURE__ */ n(Qe, { property: a }),
        children: m
      }
    ),
    s && m,
    l && /* @__PURE__ */ n(De, { property: a })
  ] });
}
function Zt({
  title: e,
  children: t,
  expanded: r = !0,
  padding: i = 1,
  darken: a = !0
}) {
  const [o, s] = M(r);
  return /* @__PURE__ */ E(
    Wa,
    {
      variant: "outlined",
      disableGutters: !0,
      expanded: o,
      sx: (l) => ({
        color: l.palette.text.secondary,
        backgroundColor: a ? void 0 : "inherit"
      }),
      TransitionProps: { unmountOnExit: !0 },
      onChange: w((l, c) => s(c), []),
      children: [
        /* @__PURE__ */ n(
          za,
          {
            expandIcon: /* @__PURE__ */ n(yl, {}),
            sx: (l) => ({
              minHeight: "56px",
              alignItems: "center",
              borderTopLeftRadius: `${l.shape.borderRadius}px`,
              borderTopRightRadius: `${l.shape.borderRadius}px`,
              borderBottomLeftRadius: o ? void 0 : `${l.shape.borderRadius}px`,
              borderBottomRightRadius: o ? void 0 : `${l.shape.borderRadius}px`,
              "&.Mui-expanded": {
                borderBottom: `1px solid ${l.palette.divider}`
              }
            }),
            children: e
          }
        ),
        /* @__PURE__ */ n(Ua, { sx: (l) => ({
          padding: typeof i == "string" ? i : l.spacing(i)
        }), children: t })
      ]
    }
  );
}
function gd({
  propertyKey: e,
  value: t,
  error: r,
  showError: i,
  isSubmitting: a,
  setValue: o,
  tableMode: s,
  property: l,
  includeDescription: c,
  underlyingValueHasChanged: d,
  context: A,
  disabled: u,
  shouldAlwaysRerender: p
}) {
  if (!l.of)
    throw Error("RepeatFieldBinding misconfiguration. Property `of` not set");
  if (!l.resolvedProperties || !Array.isArray(l.resolvedProperties))
    throw Error("RepeatFieldBinding - Internal error: Expected array in 'property.resolvedProperties'");
  const h = l.expanded === void 0 ? !0 : l.expanded, f = l.of, [g, m] = M();
  Te({
    property: l,
    value: t,
    setValue: o
  });
  const v = w((y, k) => {
    const I = l.resolvedProperties[y] ?? f, C = {
      propertyKey: `${e}[${y}]`,
      disabled: u,
      property: I,
      includeDescription: c,
      underlyingValueHasChanged: d,
      context: A,
      tableMode: !1,
      partOfArray: !0,
      autoFocus: k === g,
      shouldAlwaysRerender: I.fromBuilder
    };
    return /* @__PURE__ */ n(Rt, { ...C });
  }, [A, u, c, g, f, l.resolvedProperties, e, d]), b = /* @__PURE__ */ n(
    Mr,
    {
      value: t,
      addLabel: l.name ? "Add entry to " + l.name : "Add entry",
      name: e,
      buildEntry: v,
      onInternalIdAdded: m,
      disabled: a || Boolean(l.disabled),
      includeAddButton: !l.disabled
    }
  );
  return /* @__PURE__ */ E(we, { fullWidth: !0, error: i, children: [
    !s && /* @__PURE__ */ n(
      Zt,
      {
        expanded: h,
        title: /* @__PURE__ */ n(Qe, { property: l }),
        children: b
      }
    ),
    s && b,
    c && /* @__PURE__ */ n(De, { property: l }),
    i && typeof r == "string" && /* @__PURE__ */ n(Ee, { children: r })
  ] });
}
function hd({
  propertyKey: e,
  value: t,
  error: r,
  showError: i,
  isSubmitting: a,
  setValue: o,
  tableMode: s,
  property: l,
  includeDescription: c,
  underlyingValueHasChanged: d,
  context: A,
  disabled: u,
  shouldAlwaysRerender: p
}) {
  if (!l.oneOf)
    throw Error("ArrayOneOfField misconfiguration. Property `oneOf` not set");
  const h = l.expanded === void 0 ? !0 : l.expanded;
  Te({
    property: l,
    value: t,
    setValue: o
  });
  const [f, g] = M(), m = w((x, y) => /* @__PURE__ */ n(
    pd,
    {
      name: `${e}[${x}]`,
      index: x,
      value: t[x],
      typeField: l.oneOf.typeField ?? yn,
      valueField: l.oneOf.valueField ?? Dr,
      properties: l.oneOf.properties,
      autoFocus: y === f,
      shouldAlwaysRerender: p,
      context: A
    },
    `array_one_of_${x}`
  ), [A, f, l.oneOf, e, t]), v = /* @__PURE__ */ n(Qe, { property: l }), b = /* @__PURE__ */ n(
    Mr,
    {
      value: t,
      name: e,
      addLabel: l.name ? "Add entry to " + l.name : "Add entry",
      buildEntry: m,
      onInternalIdAdded: g,
      disabled: a || Boolean(l.disabled),
      includeAddButton: !l.disabled
    }
  );
  return /* @__PURE__ */ E(we, { fullWidth: !0, error: i, children: [
    !s && /* @__PURE__ */ n(Zt, { expanded: h, title: v, children: b }),
    s && b,
    c && /* @__PURE__ */ n(De, { property: l }),
    i && typeof r == "string" && /* @__PURE__ */ n(Ee, { children: r })
  ] });
}
function pd({
  name: e,
  index: t,
  value: r,
  typeField: i,
  valueField: a,
  properties: o,
  autoFocus: s,
  shouldAlwaysRerender: l,
  context: c
}) {
  const d = r && r[i], [A, u] = M(d ?? void 0);
  z(() => {
    d !== A && u(d);
  }, [d]);
  const p = A ? o[A] : void 0, h = Object.entries(o).map(([v, b]) => ({ id: v, label: b.name ?? v })), f = `${e}[${i}]`, g = `${e}[${a}]`, m = p ? {
    propertyKey: g,
    property: p,
    context: c,
    autoFocus: s,
    tableMode: !1,
    shouldAlwaysRerender: p.fromBuilder
  } : void 0;
  return /* @__PURE__ */ E(St, { sx: (v) => ({
    padding: v.spacing(1),
    mb: 1
  }), elevation: 0, children: [
    /* @__PURE__ */ n(
      li,
      {
        required: !0,
        name: f,
        children: (v) => /* @__PURE__ */ E(we, { fullWidth: !0, children: [
          /* @__PURE__ */ n(
            It,
            {
              id: `${e}_${t}_select_label`,
              children: /* @__PURE__ */ n("span", { children: "Type" })
            }
          ),
          /* @__PURE__ */ n(
            Je,
            {
              fullWidth: !0,
              sx: { marginBottom: 2 },
              labelId: `${e}_${t}_select_label`,
              label: "Type",
              value: v.field.value !== void 0 && v.field.value !== null ? v.field.value : "",
              onChange: (b) => {
                const x = b.target.value;
                v.form.setFieldTouched(f), u(x), v.form.setFieldValue(f, x), v.form.setFieldValue(g, null);
              },
              renderValue: (b) => /* @__PURE__ */ n(
                Le,
                {
                  enumKey: b,
                  enumValues: h,
                  small: !0
                }
              ),
              children: h.map((b) => {
                const x = b.id;
                return /* @__PURE__ */ n(
                  Ge,
                  {
                    value: x,
                    children: /* @__PURE__ */ n(
                      Le,
                      {
                        enumKey: x,
                        enumValues: h,
                        small: !0
                      }
                    )
                  },
                  `select_${e}_${t}_${x}`
                );
              })
            }
          )
        ] })
      }
    ),
    m && /* @__PURE__ */ n(
      we,
      {
        fullWidth: !0,
        children: /* @__PURE__ */ n(Rt, { ...m })
      },
      `form_control_${e}_${A}`
    )
  ] });
}
const md = new pi();
yr.use(vi.AutoResize, {
  min: 100
});
yr.unuse(vi.Clear);
function bd({
  propertyKey: e,
  value: t,
  setValue: r,
  error: i,
  showError: a,
  disabled: o,
  autoFocus: s,
  touched: l,
  property: c,
  tableMode: d,
  includeDescription: A,
  context: u,
  shouldAlwaysRerender: p
}) {
  const [h, f] = Q.useState(t), g = on(h), m = on(t);
  return z(() => {
    f(t);
  }, [t]), z(() => {
    g !== m && r(g);
  }, [g, m, r]), /* @__PURE__ */ E(
    wd,
    {
      required: c.validation?.required,
      error: a,
      fullWidth: !0,
      children: [
        !d && /* @__PURE__ */ n(Ee, { filled: !0, children: /* @__PURE__ */ n(Qe, { property: c }) }),
        /* @__PURE__ */ n(
          yr,
          {
            value: h ?? "",
            readOnly: o,
            renderHTML: (v) => md.render(v),
            view: { menu: !0, md: !0, html: !1 },
            onChange: ({ html: v, text: b }) => {
              f(b ?? null);
            }
          }
        ),
        /* @__PURE__ */ n(B, { display: "flex", children: /* @__PURE__ */ E(B, { flexGrow: 1, children: [
          a && typeof i == "string" && /* @__PURE__ */ n(Ee, { children: i }),
          A && /* @__PURE__ */ n(De, { property: c })
        ] }) })
      ]
    }
  );
}
const wd = We(we)(({ theme: e }) => `
  @font-face {
    font-family: rmel-iconfont;
    src: url(data:application/vnd.ms-fontobject;base64,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NS4BJyMOAd0VGwEBGxWRFRsbFWEcFBQcYRUbGxWRFRsBARsCK2EVGxsVkRUbAQEbKRySARsVYRwpGwEBGxWRFRsBHwEbFZEVGwEBGykcYRUbwwEbFWEcKRsBARsVkRUb/qscKRsBARsVkRUbGxUBtRQcYRUbGxWRFRsBARsAAAAAAAASAN4AAQAAAAAAAAAVAAAAAQAAAAAAAQANABUAAQAAAAAAAgAHACIAAQAAAAAAAwANACkAAQAAAAAABAANADYAAQAAAAAABQALAEMAAQAAAAAABgANAE4AAQAAAAAACgArAFsAAQAAAAAACwATAIYAAwABBAkAAAAqAJkAAwABBAkAAQAaAMMAAwABBAkAAgAOAN0AAwABBAkAAwAaAOsAAwABBAkABAAaAQUAAwABBAkABQAWAR8AAwABBAkABgAaATUAAwABBAkACgBWAU8AAwABBAkACwAmAaUKQ3JlYXRlZCBieSBpY29uZm9udApybWVsLWljb25mb250UmVndWxhcnJtZWwtaWNvbmZvbnRybWVsLWljb25mb250VmVyc2lvbiAxLjBybWVsLWljb25mb250R2VuZXJhdGVkIGJ5IHN2ZzJ0dGYgZnJvbSBGb250ZWxsbyBwcm9qZWN0Lmh0dHA6Ly9mb250ZWxsby5jb20ACgBDAHIAZQBhAHQAZQBkACAAYgB5ACAAaQBjAG8AbgBmAG8AbgB0AAoAcgBtAGUAbAAtAGkAYwBvAG4AZgBvAG4AdABSAGUAZwB1AGwAYQByAHIAbQBlAGwALQBpAGMAbwBuAGYAbwBuAHQAcgBtAGUAbAAtAGkAYwBvAG4AZgBvAG4AdABWAGUAcgBzAGkAbwBuACAAMQAuADAAcgBtAGUAbAAtAGkAYwBvAG4AZgBvAG4AdABHAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAHMAdgBnADIAdAB0AGYAIABmAHIAbwBtACAARgBvAG4AdABlAGwAbABvACAAcAByAG8AagBlAGMAdAAuAGgAdAB0AHAAOgAvAC8AZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AAAAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETARQBFQEWARcBGAEZARoBGwADdGFiCGtleWJvYXJkBmRlbGV0ZQpjb2RlLWJsb2NrBGNvZGUKdmlzaWJpbGl0eQp2aWV3LXNwbGl0BGxpbmsEcmVkbwR1bmRvBGJvbGQGaXRhbGljDGxpc3Qtb3JkZXJlZA5saXN0LXVub3JkZXJlZAVxdW90ZQ1zdHJpa2V0aHJvdWdoCXVuZGVybGluZQR3cmFwCWZvbnQtc2l6ZQRncmlkBWltYWdlC2V4cGFuZC1sZXNzC2V4cGFuZC1tb3JlD2Z1bGxzY3JlZW4tZXhpdApmdWxsc2NyZWVuAAAAAAA=);
    src: url(data:font/ttf;base64,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) format("truetype")
  }

  .rmel-iconfont {
    font-family: rmel-iconfont !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
  }

  .rmel-icon-tab:before {
    content: "\\e76d"
  }

  .rmel-icon-keyboard:before {
    content: "\\ed80"
  }

  .rmel-icon-delete:before {
    content: "\\ed3c"
  }

  .rmel-icon-code-block:before {
    content: "\\e941"
  }

  .rmel-icon-code:before {
    content: "\\ed3b"
  }

  .rmel-icon-visibility:before {
    content: "\\ed44"
  }

  .rmel-icon-view-split:before {
    content: "\\ed45"
  }

  .rmel-icon-link:before {
    content: "\\ed5f"
  }

  .rmel-icon-redo:before {
    content: "\\ed60"
  }

  .rmel-icon-undo:before {
    content: "\\ed61"
  }

  .rmel-icon-bold:before {
    content: "\\ed6f"
  }

  .rmel-icon-italic:before {
    content: "\\ed70"
  }

  .rmel-icon-list-ordered:before {
    content: "\\ed71"
  }

  .rmel-icon-list-unordered:before {
    content: "\\ed72"
  }

  .rmel-icon-quote:before {
    content: "\\ed73"
  }

  .rmel-icon-strikethrough:before {
    content: "\\ed74"
  }

  .rmel-icon-underline:before {
    content: "\\ed75"
  }

  .rmel-icon-wrap:before {
    content: "\\ed77"
  }

  .rmel-icon-font-size:before {
    content: "\\ed78"
  }

  .rmel-icon-grid:before {
    content: "\\ed8c"
  }

  .rmel-icon-image:before {
    content: "\\ed8d"
  }

  .rmel-icon-expand-less:before {
    content: "\\ed9f"
  }

  .rmel-icon-expand-more:before {
    content: "\\eda0"
  }

  .rmel-icon-fullscreen-exit:before {
    content: "\\eda1"
  }

  .rmel-icon-fullscreen:before {
    content: "\\eda2"
  }

  .rc-md-editor {
    padding-bottom: 1px;
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
            border-radius: 6px;
            background-color: ${wt(e)};
  }

  .rc-md-editor.full {
    width: 100%;
    height: 100% !important;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000
  }

  .rc-md-editor .editor-container {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    min-height: 0;
    position: relative;
                background-color: ${wt(e)};

  }

  .rc-md-editor .editor-container > .section {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-flex-shrink: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;
    -webkit-flex-basis: 1px;
    -ms-flex-preferred-size: 1px;
    flex-basis: 1px;
    padding: 4px;
    
            border: none
  }

  .rc-md-editor .editor-container > .section.in-visible {
    display: none
  }

  .rc-md-editor .editor-container > .section > .section-container {
    padding: 8x 16px 16px
  }
  
  .rc-md-editor .editor-container > .section:last-child {
    border-radius: unset
  }

  .rc-md-editor .editor-container .sec-md {
    min-height: 0;
    min-width: 0
  }

  .rc-md-editor .editor-container .sec-md .input {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    border: none;
    resize: none;
    outline: none;
    min-height: 0;
    color: inherit;
    font-size: 14px;
    line-height: 1.7;   
             background-color: ${wt(e)};

  }

  .rc-md-editor .editor-container .sec-html {
    min-height: 0;
    min-width: 0;         
       background-color: ${wt(e)};

  }

  .rc-md-editor .editor-container .sec-html .html-wrap {
    height: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: auto
  }

  .custom-html-style {
    color: inherit
  }

  .custom-html-style h1 {
    font-size: 32px;
    padding: 0;
    border: none;
    font-weight: 700;
    margin: 32px 0;
    line-height: 1.2
  }

  .custom-html-style h2 {
    font-size: 24px;
    padding: 0;
    border: none;
    font-weight: 700;
    margin: 24px 0;
    line-height: 1.7
  }

  .custom-html-style h3 {
    font-size: 18px;
    margin: 18px 0;
    padding: 0;
    line-height: 1.7;
    border: none
  }

  .custom-html-style p {
    font-size: 14px;
    line-height: 1.7;
    margin: 8px 0
  }

  .custom-html-style a {
    color: ${ye(e.palette.text.secondary, 0)}
  }

  .custom-html-style a:hover {
    text-decoration: none
  }

  .custom-html-style strong {
    font-weight: 700
  }

  .custom-html-style ol, .custom-html-style ul {
    font-size: 14px;
    line-height: 28px;
    padding-left: 36px
  }

  .custom-html-style li {
    margin-bottom: 8px;
    line-height: 1.7
  }

  .custom-html-style hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid ${e.palette.divider}
  }

  .custom-html-style pre {
    display: block;
    padding: 20px;
    line-height: 28px;
    word-break: break-word
  }

  .custom-html-style code, .custom-html-style pre {
    background-color: ${ye(e.palette.background.default, 0.1)};
    font-size: 14px;
    border-radius: 0;
    overflow-x: auto
  }

  .custom-html-style code {
    padding: 3px 0;
    margin: 0;
    word-break: normal
  }

  .custom-html-style code:after, .custom-html-style code:before {
    letter-spacing: 0
  }

  .custom-html-style blockquote {
    position: relative;
    margin: 16px 0;
    padding: 5px 8px 5px 30px;
    background: none repeat scroll 0 0 rgb(39 39 41);
    color: inherit;
    border: none;
    border-left: 10px solid #d6dbdf
  }

  .custom-html-style img, .custom-html-style video {
    max-width: 100%
  }

  .custom-html-style table {
    font-size: 14px;
    line-height: 1.7;
    max-width: 100%;
    overflow: auto;
    border: 1px solid ${e.palette.divider};
    border-collapse: collapse;
    border-spacing: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }

  .custom-html-style table td, .custom-html-style table th {
    word-break: break-all;
    word-wrap: break-word;
    white-space: normal
  }

  .custom-html-style table tr {
    border: 1px solid ${e.palette.divider}
  }

  .custom-html-style table tr:nth-of-type(2n) {
    background-color: transparent
  }

  .custom-html-style table th {
    text-align: center;
    font-weight: 700;
    border: 1px solid ${e.palette.divider};
    padding: 10px 6px;
    background-color: #f5f7fa;
    word-break: break-word
  }

  .custom-html-style table td {
    border: 1px solid ${e.palette.divider};
    text-align: left;
    padding: 10px 15px;
    word-break: break-word;
    min-width: 60px
  }

  .rc-md-editor .drop-wrap {
    display: block;
    position: absolute;
    left: 0;
    top: 28px;
    z-index: 2;
    min-width: 20px;
    padding: 10px 0;
    text-align: center;
    background-color: ${ye(e.palette.background.default, 0)};
    border-color: ${e.palette.divider};
    border-style: solid;
    border-width: 1px
  }

  .rc-md-editor .drop-wrap.hidden {
    display: none !important
  }

  .rc-md-editor .rc-md-navigation {
    min-height: 38px;
    padding: 0 8px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-bottom: 1px solid ${e.palette.divider};
    font-size: 16px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    
            color: "inherit",
            background-color: ${e.palette.mode === "light", "rgb(39 39 41)"};
        
  }

  .rc-md-editor .rc-md-navigation.in-visible {
    display: none
  }

  .rc-md-editor .rc-md-navigation .navigation-nav {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-size: 14px;
    color: ${ye(e.palette.text.secondary, 0)};
  }

  .rc-md-editor .rc-md-navigation .button-wrap, .rc-md-editor .rc-md-navigation .navigation-nav {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row
  }

  .rc-md-editor .rc-md-navigation .button-wrap {
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
  }

  .rc-md-editor .rc-md-navigation .button-wrap .button {
    position: relative;
    min-width: 22px;
    height: 28px;
    margin-left: 3px;
    margin-right: -2px;
    display: inline-block;
    cursor: pointer;
    line-height: 28px;
    text-align: center;
    color: ${e.palette.text.secondary};
  }

  .rc-md-editor .rc-md-navigation .button-wrap .button:hover {
    color: ${ye(e.palette.text.secondary, 0.2)};
  }

  .rc-md-editor .rc-md-navigation .button-wrap .button.disabled {
    color: ${ye(e.palette.text.disabled, 0)};
    cursor: not-allowed
  }

  .rc-md-editor .rc-md-navigation .button-wrap .button:first-of-type {
    margin-left: 0
  }

  .rc-md-editor .rc-md-navigation .button-wrap .button:last-child {
    margin-right: 0
  }

  .rc-md-editor .rc-md-navigation .button-wrap .rmel-iconfont {
    font-size: 18px
  }

  .rc-md-editor .rc-md-navigation li, .rc-md-editor .rc-md-navigation ul {
    list-style: none;
    margin: 0;
    padding: 0
  }

  .rc-md-editor .rc-md-navigation .h1, .rc-md-editor .rc-md-navigation .h2, .rc-md-editor .rc-md-navigation .h3, .rc-md-editor .rc-md-navigation .h4, .rc-md-editor .rc-md-navigation .h5, .rc-md-editor .rc-md-navigation .h6, .rc-md-editor .rc-md-navigation h1, .rc-md-editor .rc-md-navigation h2, .rc-md-editor .rc-md-navigation h3, .rc-md-editor .rc-md-navigation h4, .rc-md-editor .rc-md-navigation h5, .rc-md-editor .rc-md-navigation h6 {
    font-family: inherit;
    font-weight: 500;
    color: inherit;
    padding: 0;
    margin: 0;
    line-height: 1.1
  }

  .rc-md-editor .rc-md-navigation h1 {
    font-size: 34px
  }

  .rc-md-editor .rc-md-navigation h2 {
    font-size: 30px
  }

  .rc-md-editor .rc-md-navigation h3 {
    font-size: 24px
  }

  .rc-md-editor .rc-md-navigation h4 {
    font-size: 18px
  }

  .rc-md-editor .rc-md-navigation h5 {
    font-size: 14px
  }

  .rc-md-editor .rc-md-navigation h6 {
    font-size: 12px
  }

  .rc-md-editor .tool-bar {
    position: absolute;
    z-index: 1;
    right: 8px;
    top: 8px
  }

  .rc-md-editor .tool-bar .button {
    min-width: 24px;
    height: 28px;
    margin-right: 5px;
    display: inline-block;
    cursor: pointer;
    font-size: 14px;
    line-height: 28px;
    text-align: center;
    color: #999
  }

  .rc-md-editor .tool-bar .button:hover {
    color: inherit
  }

  .rc-md-editor .rc-md-divider {
    display: block;
    width: 1px;
    background-color: ${ye(e.palette.background.paper, 0)}
  }

  .rc-md-editor .table-list.wrap {
    position: relative;
    margin: 0 10px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }

  .rc-md-editor .table-list.wrap .list-item {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: ${ye(e.palette.background.paper, 0.05)};
    border-radius: 4px
  }

  .rc-md-editor .table-list.wrap .list-item.active {
    background: ${et(e.palette.background.paper, 0.2)}
  }

  .rc-md-editor .tab-map-list .list-item {
    width: 120px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }

  .rc-md-editor .tab-map-list .list-item:hover {
    background: ${ye(e.palette.background.default, 0.1)}
  }

  .rc-md-editor .tab-map-list .list-item.active {
    font-weight: 700
  }

  .rc-md-editor .header-list .list-item {
    width: 100px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 8px 0
  }

  .rc-md-editor .header-list .list-item:hover {
    background: ${ye(e.palette.background.default, 0.1)}
  }

`);
Fe.addMethod(Fe.array, "uniqueInArray", function(e = (r) => r, t) {
  return this.test("uniqueInArray", t, (r) => !r || r.length === new Set(r.map(e)).size);
});
function na(e, t, r) {
  const i = {};
  return Object.entries(t).forEach(([a, o]) => {
    i[a] = Vt({
      property: o,
      customFieldValidator: r,
      name: a,
      entityId: e
    });
  }), Fe.object().shape(i);
}
function Vt(e) {
  const t = e.property;
  if (ot(t))
    throw console.error("Error in property", e), Error("Trying to create a yup mapping from a property builder. Please use resolved properties only");
  if (t.dataType === "string")
    return yd(e);
  if (t.dataType === "number")
    return xd(e);
  if (t.dataType === "boolean")
    return kd(e);
  if (t.dataType === "map")
    return vd(e);
  if (t.dataType === "array")
    return Sd(e);
  if (t.dataType === "date")
    return Bd(e);
  if (t.dataType === "geopoint")
    return Ed(e);
  if (t.dataType === "reference")
    return Cd(e);
  throw console.error("Unsupported data type in yup mapping", t), Error("Unsupported data type in yup mapping");
}
function vd({
  property: e,
  entityId: t,
  customFieldValidator: r,
  name: i
}) {
  const a = {};
  return e.validation, e.properties && Object.entries(e.properties).forEach(([o, s]) => {
    a[o] = Vt({
      property: s,
      parentProperty: e,
      customFieldValidator: r,
      name: `${i}[${o}]`,
      entityId: t
    });
  }), Fe.object().shape(a);
}
function yd({
  property: e,
  parentProperty: t,
  customFieldValidator: r,
  name: i,
  entityId: a
}) {
  let o = Fe.string();
  const s = e.validation;
  if (e.enumValues && (s?.required && (o = o.required(s?.requiredMessage ? s.requiredMessage : "Required")), o = o.oneOf(
    vn(e.enumValues).map((l) => l.id)
  )), s) {
    if (o = s.required ? o.required(s?.requiredMessage ? s.requiredMessage : "Required").nullable(!0) : o.notRequired().nullable(!0), s.unique && r && i && (o = o.test(
      "unique",
      "This value already exists and should be unique",
      (l, c) => r({
        name: i,
        property: e,
        parentProperty: t,
        value: l,
        entityId: a
      })
    )), (s.min || s.min === 0) && (o = o.min(s.min, `${e.name} must be min ${s.min} characters long`)), (s.max || s.max === 0) && (o = o.max(s.max, `${e.name} must be max ${s.max} characters long`)), s.matches) {
      const l = typeof s.matches == "string" ? Kc(s.matches) : s.matches;
      l && (o = o.matches(l, s.matchesMessage ? { message: s.matchesMessage } : void 0));
    }
    s.trim && (o = o.trim()), s.lowercase && (o = o.lowercase()), s.uppercase && (o = o.uppercase()), e.email && (o = o.email(`${e.name} must be an email`)), e.url && (o = o.url(`${e.name} must be a url`));
  } else
    o = o.notRequired().nullable(!0);
  return o;
}
function xd({
  property: e,
  parentProperty: t,
  customFieldValidator: r,
  name: i,
  entityId: a
}) {
  const o = e.validation;
  let s = Fe.number().typeError("Must be a number");
  return o ? (s = o.required ? s.required(o.requiredMessage ? o.requiredMessage : "Required").nullable(!0) : s.notRequired().nullable(!0), o.unique && r && i && (s = s.test(
    "unique",
    "This value already exists and should be unique",
    (l) => r({
      name: i,
      property: e,
      parentProperty: t,
      value: l,
      entityId: a
    })
  )), (o.min || o.min === 0) && (s = s.min(o.min, `${e.name} must be higher or equal to ${o.min}`)), (o.max || o.max === 0) && (s = s.max(o.max, `${e.name} must be lower or equal to ${o.max}`)), (o.lessThan || o.lessThan === 0) && (s = s.lessThan(o.lessThan, `${e.name} must be higher than ${o.lessThan}`)), (o.moreThan || o.moreThan === 0) && (s = s.moreThan(o.moreThan, `${e.name} must be lower than ${o.moreThan}`)), o.positive && (s = s.positive(`${e.name} must be positive`)), o.negative && (s = s.negative(`${e.name} must be negative`)), o.integer && (s = s.integer(`${e.name} must be an integer`))) : s = s.notRequired().nullable(!0), s;
}
function Ed({
  property: e,
  parentProperty: t,
  customFieldValidator: r,
  name: i,
  entityId: a
}) {
  let o = Fe.object();
  const s = e.validation;
  return s?.unique && r && i && (o = o.test(
    "unique",
    "This value already exists and should be unique",
    (l) => r({
      name: i,
      property: e,
      parentProperty: t,
      value: l,
      entityId: a
    })
  )), s?.required ? o = o.required(s.requiredMessage).nullable(!0) : o = o.notRequired().nullable(!0), o;
}
function Bd({
  property: e,
  parentProperty: t,
  customFieldValidator: r,
  name: i,
  entityId: a
}) {
  if (e.autoValue)
    return Fe.object().nullable();
  let o = Fe.date();
  const s = e.validation;
  return s ? (o = s.required ? o.required(s?.requiredMessage ? s.requiredMessage : "Required") : o.notRequired(), s.unique && r && i && (o = o.test(
    "unique",
    "This value already exists and should be unique",
    (l) => r({
      name: i,
      property: e,
      parentProperty: t,
      value: l,
      entityId: a
    })
  )), s.min && (o = o.min(s.min, `${e.name} must be after ${s.min}`)), s.max && (o = o.max(s.max, `${e.name} must be before ${s.min}`))) : o = o.notRequired(), o.transform((l) => l instanceof Date ? l : null).nullable();
}
function Cd({
  property: e,
  parentProperty: t,
  customFieldValidator: r,
  name: i,
  entityId: a
}) {
  let o = Fe.object();
  const s = e.validation;
  return s ? (o = s.required ? o.required(s?.requiredMessage ? s.requiredMessage : "Required").nullable(!0) : o.notRequired().nullable(!0), s.unique && r && i && (o = o.test(
    "unique",
    "This value already exists and should be unique",
    (l) => r({
      name: i,
      property: e,
      parentProperty: t,
      value: l,
      entityId: a
    })
  ))) : o = o.notRequired().nullable(!0), o;
}
function kd({
  property: e,
  parentProperty: t,
  customFieldValidator: r,
  name: i,
  entityId: a
}) {
  let o = Fe.boolean();
  const s = e.validation;
  return s ? (o = s.required ? o.required(s?.requiredMessage ? s.requiredMessage : "Required").nullable(!0) : o.notRequired().nullable(!0), s.unique && r && i && (o = o.test(
    "unique",
    "This value already exists and should be unique",
    (l) => r({
      name: i,
      property: e,
      parentProperty: t,
      value: l,
      entityId: a
    })
  ))) : o = o.notRequired().nullable(!0), o;
}
function Id(e) {
  return e.validation?.uniqueInArray ? !0 : e.dataType === "map" && e.properties ? Object.entries(e.properties).filter(([t, r]) => r.validation?.uniqueInArray) : !1;
}
function Sd({
  property: e,
  parentProperty: t,
  customFieldValidator: r,
  name: i,
  entityId: a
}) {
  let o = Fe.array();
  if (e.of)
    if (Array.isArray(e.of)) {
      const l = e.of.map((c, d) => ({
        [`${i}[${d}]`]: Vt({
          property: c,
          parentProperty: e,
          entityId: a
        })
      })).reduce((c, d) => ({ ...c, ...d }), {});
      return Fe.array().of(
        Fe.mixed().test(
          "Dynamic object validation",
          "Dynamic object validation error",
          (c, d) => l[d.path].validate(c)
        )
      );
    } else {
      o = o.of(Vt({
        property: e.of,
        parentProperty: e,
        entityId: a
      }));
      const l = Id(e.of);
      l && (typeof l == "boolean" ? o = o.uniqueInArray((c) => c, `${e.name} should have unique values within the array`) : Array.isArray(l) && l.forEach(
        ([c, d]) => {
          o = o.uniqueInArray((A) => A && A[c], `${e.name} → ${d.name ?? c}: should have unique values within the array`);
        }
      ));
    }
  const s = e.validation;
  return s ? (o = s.required ? o.required(s?.requiredMessage ? s.requiredMessage : "Required").nullable(!0) : o.notRequired().nullable(!0), (s.min || s.min === 0) && (o = o.min(s.min, `${e.name} should be min ${s.min} entries long`)), s.max && (o = o.max(s.max, `${e.name} should be max ${s.max} entries long`))) : o = o.notRequired().nullable(!0), o;
}
const Fd = ({ containerRef: e }) => {
  const { isSubmitting: t, isValidating: r, errors: i } = zs();
  return z(() => {
    const a = Object.keys(i);
    if (a.length > 0 && t && !r) {
      const o = e?.current?.querySelector(
        `#form_field_${a[0]}`
      );
      if (o && e?.current) {
        const s = ra(e.current);
        if (s) {
          const c = o.getBoundingClientRect().top;
          s.scrollTo({
            top: s.scrollTop + c - 64,
            behavior: "smooth"
          });
        }
        const l = o.querySelector("input");
        l && l.focus();
      }
    }
  }, [t, r, i, e]), null;
}, Rd = (e) => {
  const t = e && e.scrollHeight > e.clientHeight, r = e ? window.getComputedStyle(e).overflowY : null, i = r && r.indexOf("hidden") !== -1;
  return t && !i;
}, ra = (e) => !e || e === document.body ? document.body : Rd(e) ? e : ra(e.parentNode), ke = ({
  collection: e,
  path: t,
  entityId: r,
  values: i,
  previousValues: a,
  userConfigPersistence: o,
  fields: s
}) => {
  const l = o?.getCollectionConfig(t), c = Bt(l, "properties"), d = fn(e.properties), A = i ?? d, u = a ?? i ?? d, p = Object.entries(e.properties).map(([g, m]) => ({
    [g]: $e({
      propertyOrBuilder: m,
      values: A,
      previousValues: u,
      path: t,
      propertyValue: A ? Zn(A, g) : void 0,
      entityId: r,
      fields: s
    })
  })).filter((g) => g !== null).reduce((g, m) => ({ ...g, ...m }), {}), h = Ze(p, c), f = Object.entries(h).filter(([g, m]) => Boolean(m?.dataType)).map(([g, m]) => ({ [g]: m })).reduce((g, m) => ({ ...g, ...m }), {});
  return {
    ...e,
    properties: f,
    originalCollection: e
  };
};
function $e({
  propertyOrBuilder: e,
  propertyValue: t,
  fromBuilder: r = !1,
  ...i
}) {
  if (typeof e == "object" && "resolved" in e)
    return e;
  let a = null;
  if (e)
    if (ot(e)) {
      const o = i.path;
      if (!o)
        throw Error("Trying to resolve a property builder without specifying the entity path");
      const s = e({
        ...i,
        path: o,
        propertyValue: t,
        values: i.values ?? {},
        previousValues: i.previousValues ?? i.values ?? {}
      });
      if (!s)
        return console.debug("Property builder not returning `Property` so it is not rendered", o, i.entityId, e), null;
      a = $e({
        ...i,
        propertyOrBuilder: s,
        fromBuilder: !0
      });
    } else {
      const o = e;
      if (o.dataType === "map" && o.properties) {
        const s = oa({
          ...i,
          properties: o.properties,
          propertyValue: t
        });
        a = {
          ...o,
          fromBuilder: r,
          properties: s
        };
      } else
        o.dataType === "array" ? a = ft({
          property: o,
          propertyValue: t,
          fromBuilder: r,
          ...i
        }) : (o.dataType === "string" || o.dataType === "number") && o.enumValues && (a = ia(o, r));
    }
  else
    return null;
  if (a || (a = {
    ...e,
    resolved: !0,
    fromBuilder: r
  }), a.fieldConfig) {
    const o = i.fields;
    if (!o)
      throw Error("Trying to resolve a property that inherits from a custom field but no custom fields were provided. Use the property `fields` in your top level component to provide them");
    const s = o[a.fieldConfig];
    if (!s)
      throw Error(`Trying to resolve a property that inherits from a custom field but no custom field with id ${a.fieldConfig} was found. Check the \`fields\` in your top level component`);
    if (s.defaultProperty) {
      const l = $e({
        propertyOrBuilder: s.defaultProperty,
        propertyValue: t,
        ...i
      });
      l && (a = Ze(l, a));
    }
    s.Field && (a.Field = s.Field);
  }
  return a;
}
function ft({
  property: e,
  propertyValue: t,
  ...r
}) {
  if (e.of) {
    if (Array.isArray(e.of))
      return {
        ...e,
        resolved: !0,
        fromBuilder: r.fromBuilder,
        resolvedProperties: e.of.map((i, a) => $e({
          propertyOrBuilder: i,
          propertyValue: Array.isArray(t) ? t[a] : void 0,
          ...r
        }))
      };
    {
      const i = e.of, a = Array.isArray(t) ? t.map((s, l) => $e({
        propertyOrBuilder: i,
        propertyValue: s,
        index: l,
        ...r
      })).filter((s) => Boolean(s)) : [], o = $e({
        propertyOrBuilder: i,
        propertyValue: void 0,
        ...r
      });
      if (!o)
        throw Error("When using a property builder as the 'of' prop of an ArrayProperty, you must return a valid child property");
      return {
        ...e,
        resolved: !0,
        fromBuilder: r.fromBuilder,
        of: o,
        resolvedProperties: a
      };
    }
  } else if (e.oneOf) {
    const i = e.oneOf?.typeField ?? yn, a = Array.isArray(t) ? t.map((s, l) => {
      const c = s && s[i], d = e.oneOf?.properties[c];
      return !c || !d ? null : $e({
        propertyOrBuilder: d,
        propertyValue: t,
        ...r
      });
    }).filter((s) => Boolean(s)) : [], o = oa({
      properties: e.oneOf.properties,
      propertyValue: void 0,
      ...r
    });
    return {
      ...e,
      resolved: !0,
      oneOf: {
        ...e.oneOf,
        properties: o
      },
      fromBuilder: r.fromBuilder,
      resolvedProperties: a
    };
  } else {
    if (e.Field)
      return {
        ...e,
        resolved: !0,
        fromBuilder: r.fromBuilder
      };
    throw Error("The array property needs to declare an 'of' or a 'oneOf' property, or provide a custom `Field`");
  }
}
function oa({
  properties: e,
  propertyValue: t,
  ...r
}) {
  return Object.entries(e).map(([i, a]) => ({
    [i]: $e({
      propertyOrBuilder: a,
      propertyValue: t && typeof t == "object" ? t[i] : void 0,
      ...r
    })
  })).filter((i) => i !== null).reduce((i, a) => ({ ...i, ...a }), {});
}
function ia(e, t) {
  return typeof e.enumValues == "object" ? {
    ...e,
    resolved: !0,
    enumValues: xn(e.enumValues)?.filter((r) => r && r.id && r.label) ?? [],
    fromBuilder: t ?? !1
  } : e;
}
function xn(e) {
  return typeof e == "object" ? Object.entries(e).map(([t, r]) => typeof r == "string" ? {
    id: t,
    label: r
  } : r) : Array.isArray(e) ? e : void 0;
}
const To = "CustomIdField", nr = {
  input: `${To}-input`,
  select: `${To}-select`
}, Dd = We(we)(({ theme: e }) => ({
  [`& .${nr.input}`]: {
    minHeight: "64px"
  },
  [`& .${nr.select}`]: {
    paddingTop: e.spacing(1 / 2)
  }
}));
function Qd({
  customId: e,
  entityId: t,
  status: r,
  onChange: i,
  error: a,
  entity: o
}) {
  const s = r === "existing" || !e, l = r !== "existing" && !e, c = ie(() => {
    if (!(!e || typeof e == "boolean" || e === "optional"))
      return xn(e);
  }, [e]), d = rt(), { copy: A } = lc({
    onSuccess: (f) => d.open({
      type: "success",
      message: `Copied ${f}`
    })
  }), u = re(), p = {
    sx: {
      minHeight: "64px"
    },
    endAdornment: o ? /* @__PURE__ */ E(ja, { position: "end", children: [
      /* @__PURE__ */ n(
        ne,
        {
          onClick: (f) => A(o.id),
          "aria-label": "copy-id",
          size: "large",
          children: /* @__PURE__ */ n(de, { title: "Copy", children: /* @__PURE__ */ n(
            "svg",
            {
              className: "MuiSvgIcon-root MuiSvgIcon-fontSizeSmall",
              fill: "currentColor",
              width: "20",
              height: "20",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ n(
                "path",
                {
                  d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
                }
              )
            }
          ) })
        }
      ),
      u?.entityLinkBuilder && /* @__PURE__ */ n(
        "a",
        {
          href: u.entityLinkBuilder({ entity: o }),
          rel: "noopener noreferrer",
          target: "_blank",
          children: /* @__PURE__ */ n(
            ne,
            {
              onClick: (f) => f.stopPropagation(),
              "aria-label": "go-to-datasource",
              size: "large",
              children: /* @__PURE__ */ n(de, { title: "Open in the console", children: /* @__PURE__ */ n(Ht, { fontSize: "small" }) })
            }
          )
        }
      )
    ] }) : void 0
  }, h = {
    label: l ? "ID is set automatically" : "ID",
    disabled: s,
    name: "id",
    type: null,
    value: (o && r === "existing" ? o.id : t) ?? "",
    variant: "filled"
  };
  return /* @__PURE__ */ Pl(
    Dd,
    {
      fullWidth: !0,
      error: a,
      ...h,
      key: "custom-id-field"
    },
    c && /* @__PURE__ */ E(Z, { children: [
      /* @__PURE__ */ n(It, { id: "id-label", children: h.label }),
      /* @__PURE__ */ n(
        Je,
        {
          labelId: "id-label",
          fullWidth: !0,
          className: nr.select,
          error: a,
          ...h,
          onChange: (f) => i(f.target.value),
          children: c.map((f) => /* @__PURE__ */ n(
            Ge,
            {
              value: f.id,
              children: `${f.id} - ${f.label}`
            },
            `custom-id-item-${f.id}`
          ))
        }
      )
    ] }),
    !c && /* @__PURE__ */ n(
      nt,
      {
        ...h,
        error: a,
        InputProps: p,
        helperText: e === "optional" ? "Autogenerated ID, it can be manually changed" : r === "new" || r === "copy" ? "ID of the new document" : "ID of the document",
        onChange: (f) => {
          let g = f.target.value;
          return g && (g = g.trim()), i(g.length ? g : void 0);
        }
      }
    ),
    /* @__PURE__ */ n(
      Us,
      {
        name: "id",
        component: "div",
        children: (f) => "You need to specify an ID"
      }
    )
  );
}
const Td = function({
  status: t,
  path: r,
  collection: i,
  entity: a,
  onEntitySave: o,
  onDiscard: s,
  onModified: l,
  onValuesChanged: c
}) {
  const d = re(), A = Ve(), u = ie(() => ke({
    collection: i,
    path: r,
    values: a?.values,
    fields: d.fields
  }), [a?.values, i, r]), p = (t === "new" || t === "copy") && Boolean(u.customId) && u.customId !== "optional", h = ie(() => t === "new" || t === "copy" ? p ? void 0 : A.generateEntityId(r) : a?.id, []), f = he(!1), g = ie(() => {
    const O = u.properties;
    if ((t === "existing" || t === "copy") && a)
      return a.values ?? fn(O);
    if (t === "new")
      return fn(O);
    throw console.error({
      status: t,
      entity: a
    }), new Error("Form has not been initialised with the correct parameters");
  }, [t, u, a]), [m, v] = Q.useState(h), [b, x] = Q.useState(!1), [y, k] = Q.useState(), [I, C] = M(a?.values ?? g), [S, D] = M(I), P = (O) => {
    D(O), c && c(O);
  }, R = ie(() => ke({
    collection: i,
    path: r,
    entityId: m,
    values: S,
    previousValues: I,
    fields: d.fields
  }), [i, r, m, S, I]), $ = R.callbacks?.onIdUpdate;
  z(() => {
    if ($ && S && (t === "new" || t === "copy"))
      try {
        v(
          $({
            collection: R,
            path: r,
            entityId: m,
            values: S,
            context: d
          })
        );
      } catch (O) {
        console.error(O);
      }
  }, [R, d, m, S, r, t]);
  const L = ie(() => I && t === "existing" ? Object.entries(R.properties).map(([O, F]) => {
    if (Tr(F))
      return {};
    const G = I[O], U = g[O];
    return Ae(G, U) ? {} : { [O]: U };
  }).reduce((O, F) => ({ ...O, ...F }), {}) : {}, [g, R.properties, I, t]), K = w((O, F) => {
    if (p && !m) {
      console.error("Missing custom Id"), x(!0), F.setSubmitting(!1);
      return;
    }
    if (k(void 0), x(!1), t === "existing") {
      if (!a?.id)
        throw Error("Form misconfiguration when saving, no id for existing entity");
    } else if (t === "new" || t === "copy") {
      if (R.customId && R.customId !== "optional" && !m)
        throw Error("Form misconfiguration when saving, entityId should be set");
    } else
      throw Error("New FormType added, check EntityForm");
    o?.({
      collection: R,
      path: r,
      entityId: m,
      values: O,
      previousValues: a?.values,
      closeAfterSave: f.current
    }).then((G) => {
      const U = t === "new" ? "new_entity_saved" : t === "copy" ? "entity_copied" : t === "existing" ? "entity_edited" : "unmapped_event";
      d.onAnalyticsEvent?.(U, { path: r }), C(O), F.resetForm({
        values: O,
        submitCount: 0,
        touched: {}
      });
    }).catch((G) => {
      console.error(G), k(G);
    }).finally(() => {
      f.current = !1, F.setSubmitting(!1);
    });
  }, [t, r, R, a, o, p, m]), V = w(
    ({
      name: O,
      value: F,
      property: G
    }) => A.checkUniqueField(r, O, F, G, m),
    [A, r, m]
  ), W = ie(
    () => m ? na(
      m,
      R.properties,
      V
    ) : void 0,
    [m, R.properties]
  );
  return /* @__PURE__ */ n(
    ci,
    {
      initialValues: g,
      onSubmit: K,
      validateOnMount: !0,
      validationSchema: W,
      validate: (O) => console.debug("Validating", O),
      onReset: () => s && s(),
      children: (O) => /* @__PURE__ */ n(Z, { children: /* @__PURE__ */ E(
        B,
        {
          sx: (F) => ({
            paddingLeft: F.spacing(4),
            paddingRight: F.spacing(4),
            paddingTop: F.spacing(3),
            paddingBottom: F.spacing(4),
            marginBottom: F.spacing(2),
            [F.breakpoints.down("lg")]: {
              paddingLeft: F.spacing(2),
              paddingRight: F.spacing(2),
              paddingTop: F.spacing(2),
              paddingBottom: F.spacing(3)
            },
            [F.breakpoints.down("md")]: {
              padding: F.spacing(2)
            }
          }),
          children: [
            /* @__PURE__ */ n(
              Qd,
              {
                customId: R.customId,
                entityId: m,
                status: t,
                onChange: v,
                error: b,
                entity: a
              }
            ),
            m && /* @__PURE__ */ n(
              Pd,
              {
                ...O,
                initialValues: I,
                onModified: l,
                onValuesChanged: P,
                underlyingChanges: L,
                path: r,
                entity: a,
                entityId: m,
                collection: R,
                status: t,
                savingError: y,
                closeAfterSaveRef: f
              }
            )
          ]
        }
      ) })
    }
  );
}, Md = Q.memo(
  Td,
  (e, t) => e.status === t.status && e.path === t.path && Ae(e.entity?.values, t.entity?.values)
);
function Pd({
  initialValues: e,
  values: t,
  onModified: r,
  onValuesChanged: i,
  underlyingChanges: a,
  entityId: o,
  entity: s,
  touched: l,
  setFieldValue: c,
  collection: d,
  path: A,
  isSubmitting: u,
  status: p,
  handleSubmit: h,
  savingError: f,
  dirty: g,
  errors: m,
  closeAfterSaveRef: v
}) {
  const b = g;
  z(() => {
    r && r(b), i && i(t);
  }, [b, t]), z(() => {
    a && s && Object.entries(a).forEach(([C, S]) => {
      const D = t[C];
      !Ae(S, D) && !l[C] && (console.debug("Updated value from the datasource:", C, S), c(C, S !== void 0 ? S : null));
    });
  }, [a, s, t, l, c]);
  const x = {
    collection: d,
    entityId: o,
    values: t,
    path: A
  }, y = /* @__PURE__ */ n(oe, { container: !0, spacing: 4, children: Object.entries(d.properties).filter(([C, S]) => !Tr(S)).map(([C, S]) => {
    const D = !!a && Object.keys(a).includes(C) && !!l[C], P = u || Jt(S) || Boolean(S.disabled), R = rr(S), $ = {
      propertyKey: C,
      disabled: P,
      property: S,
      includeDescription: !0,
      underlyingValueHasChanged: D,
      context: x,
      tableMode: !1,
      partOfArray: !1,
      autoFocus: !1,
      shouldAlwaysRerender: R
    };
    return /* @__PURE__ */ n(
      oe,
      {
        item: !0,
        xs: 12,
        id: `form_field_${C}`,
        children: /* @__PURE__ */ n(Rt, { ...$ })
      },
      `field_${d.name}_${C}`
    );
  }) }), k = u || !b && p === "existing", I = Q.createRef();
  return /* @__PURE__ */ E(
    di,
    {
      onSubmit: h,
      noValidate: !0,
      children: [
        /* @__PURE__ */ E(
          B,
          {
            sx: { mt: 4 },
            ref: I,
            children: [
              y,
              /* @__PURE__ */ n(Fd, { containerRef: I })
            ]
          }
        ),
        /* @__PURE__ */ n(B, { sx: { height: 56 } }),
        /* @__PURE__ */ E(gt, { position: "absolute", children: [
          f && /* @__PURE__ */ n(B, { textAlign: "right", children: /* @__PURE__ */ n(X, { color: "error", children: f.message }) }),
          p === "existing" && /* @__PURE__ */ n(
            ae,
            {
              variant: "text",
              color: "primary",
              disabled: k,
              type: "reset",
              children: "Discard"
            }
          ),
          /* @__PURE__ */ E(
            ae,
            {
              variant: "text",
              color: "primary",
              type: "submit",
              disabled: k,
              onClick: () => {
                v.current = !1;
              },
              children: [
                p === "existing" && "Save",
                p === "copy" && "Create copy",
                p === "new" && "Create"
              ]
            }
          ),
          /* @__PURE__ */ E(
            ae,
            {
              variant: "contained",
              color: "primary",
              type: "submit",
              disabled: k,
              onClick: () => {
                v.current = !0;
              },
              children: [
                p === "existing" && "Save and close",
                p === "copy" && "Create copy and close",
                p === "new" && "Create and close"
              ]
            }
          )
        ] })
      ]
    }
  );
}
const rr = (e) => {
  const t = Boolean(e.Field) || e.fromBuilder;
  return e.dataType === "map" && e.properties ? t || Object.values(e.properties).some((r) => rr(r)) : e.dataType === "array" && Array.isArray(e.resolvedProperties) ? t || e.resolvedProperties.some((r) => r && rr(r)) : t;
};
function $d({
  propertyKey: e,
  value: t,
  error: r,
  showError: i,
  isSubmitting: a,
  setValue: o,
  tableMode: s,
  property: l,
  includeDescription: c,
  underlyingValueHasChanged: d,
  context: A,
  disabled: u,
  shouldAlwaysRerender: p
}) {
  if (!Array.isArray(l.resolvedProperties))
    throw Error("ArrayCustomShapedFieldBinding misconfiguration. Property `of` not set");
  const h = l.expanded === void 0 ? !0 : l.expanded;
  Te({
    property: l,
    value: t,
    setValue: o
  });
  const f = /* @__PURE__ */ n(Qe, { property: l }), g = l.resolvedProperties.map((m, v) => {
    const b = {
      propertyKey: `${e}[${v}]`,
      disabled: u,
      property: m,
      includeDescription: c,
      underlyingValueHasChanged: d,
      context: A,
      tableMode: !1,
      partOfArray: !0,
      autoFocus: !1,
      shouldAlwaysRerender: m.fromBuilder
    };
    return /* @__PURE__ */ n(B, { pb: 1, children: /* @__PURE__ */ n(Rt, { ...b }) }, `custom_shaped_array_${v}`);
  });
  return /* @__PURE__ */ E(we, { fullWidth: !0, error: i, children: [
    !s && /* @__PURE__ */ n(Zt, { expanded: h, title: f, children: g }),
    s && g,
    c && /* @__PURE__ */ n(De, { property: l }),
    i && typeof r == "string" && /* @__PURE__ */ n(Ee, { children: r })
  ] });
}
const Gd = {
  text_field: {
    name: "Text field",
    description: "Simple short text",
    dataType: "string",
    Icon: ks,
    color: "#2d7ff9",
    Field: Mt
  },
  multiline: {
    name: "Multiline",
    description: "Text with multiple lines",
    dataType: "string",
    Icon: Is,
    color: "#2d7ff9",
    Field: Mt
  },
  markdown: {
    name: "Markdown",
    description: "Text with advanced markdown syntax",
    dataType: "string",
    Icon: Ls,
    color: "#2d7ff9",
    Field: bd
  },
  url: {
    name: "Url",
    description: "Text with URL validation",
    dataType: "string",
    Icon: $s,
    color: "#154fb3",
    Field: Mt
  },
  email: {
    name: "Email",
    description: "Text with email validation",
    dataType: "string",
    Icon: si,
    color: "#154fb3",
    Field: Mt
  },
  select: {
    name: "Select/enum",
    description: "Select one text value from within an enumeration",
    dataType: "string",
    Icon: Fs,
    color: "#4223c9",
    Field: Io
  },
  multi_select: {
    name: "Multi select",
    description: "Select multiple text values from within an enumeration",
    dataType: "array",
    Icon: Ms,
    color: "#4223c9",
    Field: So
  },
  number_input: {
    name: "Number input",
    description: "Simple number field with validation",
    dataType: "number",
    Icon: Os,
    color: "#bec920",
    Field: Mt
  },
  number_select: {
    name: "Number select",
    description: "Select a number value from within an enumeration",
    dataType: "number",
    Icon: Kr,
    color: "#bec920",
    Field: Io
  },
  multi_number_select: {
    name: "Multiple number select",
    description: "Select multiple number values from within an enumeration",
    dataType: "array",
    Icon: Kr,
    color: "#bec920",
    Field: So
  },
  file_upload: {
    name: "File upload",
    description: "Input for uploading single files",
    dataType: "string",
    Icon: Ds,
    color: "#f92d9a",
    Field: Qo
  },
  multi_file_upload: {
    name: "Multiple file upload",
    description: "Input for uploading multiple files",
    dataType: "array",
    Icon: Qs,
    color: "#f92d9a",
    Field: Qo
  },
  reference: {
    name: "Reference",
    description: "The value refers to a different collection",
    dataType: "reference",
    Icon: Ps,
    color: "#ff0042",
    Field: cd
  },
  multi_references: {
    name: "Multiple references",
    description: "Multiple values that refer to a different collection",
    dataType: "array",
    Icon: Ss,
    color: "#ff0042",
    Field: ed
  },
  switch: {
    name: "Switch",
    description: "True or false field (or yes or no, 0 or 1...)",
    dataType: "boolean",
    Icon: Gs,
    color: "#20d9d2",
    Field: sd
  },
  date_time: {
    name: "Date/time",
    description: "A date time select field",
    dataType: "date",
    Icon: Rs,
    color: "#8b46ff",
    Field: ld
  },
  group: {
    name: "Group",
    description: "Group of multiple fields",
    dataType: "map",
    Icon: Ys,
    color: "#ff9408",
    Field: fd
  },
  repeat: {
    name: "Repeat/list",
    description: "A field that gets repeated multiple times (e.g. multiple text fields)",
    dataType: "array",
    Icon: Xr,
    color: "#ff9408",
    Field: gd
  },
  custom_array: {
    name: "Custom array",
    description: "A field that saved its value as an array of custom objects",
    dataType: "array",
    Icon: Xr,
    color: "#ff9408",
    Field: $d
  },
  block: {
    name: "Block",
    description: "A complex field that allows the user to compose different fields together, with a key->value format",
    dataType: "array",
    Icon: Ts,
    color: "#ff9408",
    Field: hd
  }
};
function Pr(e) {
  const t = Od(e);
  return t ? Gd[t] : void 0;
}
function Od(e) {
  if (e.dataType === "string")
    return e.multiline ? "multiline" : e.markdown ? "markdown" : e.storage ? "file_upload" : e.url ? "url" : e.email ? "email" : e.enumValues ? "select" : "text_field";
  if (e.dataType === "number")
    return e.enumValues ? "number_select" : "number_input";
  if (e.dataType === "map") {
    if (e.properties)
      return "group";
  } else if (e.dataType === "array") {
    const t = e.of, r = e.oneOf;
    return Array.isArray(t) ? "custom_array" : ot(t) ? "repeat" : t?.dataType === "string" && t.enumValues ? "multi_select" : t?.dataType === "number" && t.enumValues ? "multi_number_select" : t?.dataType === "string" && t.storage ? "multi_file_upload" : t?.dataType === "reference" ? "multi_references" : r ? "block" : "repeat";
  } else {
    if (e.dataType === "boolean")
      return "switch";
    if (e.dataType === "date")
      return "date_time";
    if (e.dataType === "reference")
      return "reference";
  }
  console.error("Unsupported field config mapping", e);
}
function Ld(e, t) {
  const r = $e({
    propertyOrBuilder: e,
    fields: t
  });
  return r ? r.dataType === "reference" ? !0 : r.dataType === "array" ? Array.isArray(r.of) ? !1 : r.of?.dataType === "reference" : !1 : null;
}
function Yd(e = "inherit", t = "inherit") {
  return /* @__PURE__ */ n(Es, { color: e, fontSize: t });
}
function aa(e, t, r) {
  const i = e?.Icon ?? Cs;
  return /* @__PURE__ */ n(i, { color: t, fontSize: r });
}
function $r(e, t = "inherit", r = "inherit") {
  if (ot(e))
    return /* @__PURE__ */ n(Bs, { color: t, fontSize: r });
  {
    const i = Pr(e);
    return aa(i, t, r);
  }
}
function jg(e, t = "inherit") {
  return /* @__PURE__ */ n(B, { sx: {
    background: e?.color ?? "#888",
    height: "32px",
    width: "32px",
    padding: 0.5,
    borderRadius: "50%",
    boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
    color: "white"
  }, children: aa(e, t, "medium") });
}
function Ng(e) {
  return ot(e) ? "#888" : Pr(e)?.color ?? "#666";
}
function sa(e, t) {
  if (typeof e == "object") {
    if (t in e)
      return e[t];
    if (t.includes(".")) {
      const r = t.split("."), i = e[r[0]];
      if (typeof i == "object" && i.dataType === "map" && i.properties)
        return sa(i.properties, r.slice(1).join("."));
    }
  }
}
function la(e, t) {
  if (typeof e == "object") {
    if (t in e)
      return e[t];
    if (t.includes(".")) {
      const r = t.split("."), i = e[r[0]];
      if (i.dataType === "map" && i.properties)
        return la(i.properties, r.slice(1).join("."));
    }
  }
}
const En = {
  read: !0,
  edit: !0,
  create: !0,
  delete: !0
};
function Gr(e, t, r, i) {
  const a = e.permissions;
  if (a === void 0)
    return En;
  if (typeof a == "object")
    return a;
  if (typeof a == "function")
    return a({
      entity: i,
      user: t.user,
      authController: t,
      collection: e,
      pathSegments: r
    });
  throw console.error("Permissions:", a), Error("New type of permission added and not mapped");
}
function ca(e, t, r, i) {
  return Gr(e, t, r, i).edit ?? En.edit;
}
function Or(e, t, r, i) {
  return Gr(e, t, r, i).create ?? En.create;
}
function da(e, t, r, i) {
  return Gr(e, t, r, i).delete ?? En.delete;
}
function Mo(e) {
  return ai[e];
}
function or(e) {
  if (e?.icon && Mo(e.icon))
    return Mo(e.icon);
  const t = Po.length;
  return ai[Po[Li(e.path) % t]];
}
const Po = ["AcUnit", "Adjust", "AlignHorizontalCenter", "Album", "AllInclusive", "AllOut", "Animation", "Assistant", "Attractions", "Audiotrack", "AutoAwesome", "AutoAwesomeMosaic", "BeachAccess", "Bolt", "Brightness1", "BreakfastDining", "BrokenImage", "Brightness5", "Cable", "CalendarViewMonth", "CatchingPokemon", "Casino", "Category", "Cloud", "ColorLens", "CreditCard", "Coronavirus", "Earbuds", "EggAlt", "FiberSmartRecord", "Flag", "Healing", "HeatPump", "Hive", "Hub", "LocalFireDepartment", "LocalPizza", "Memory", "Outlet", "Pages", "PanoramaPhotosphere", "SignalCellular0Bar", "SportsBaseball", "Storm", "Stairs"];
function Hg(e, t) {
  if (t !== void 0 && t === 1)
    return e;
  const r = {
    "(quiz)$": "$1zes",
    "^(ox)$": "$1en",
    "([m|l])ouse$": "$1ice",
    "(matr|vert|ind)ix|ex$": "$1ices",
    "(x|ch|ss|sh)$": "$1es",
    "([^aeiouy]|qu)y$": "$1ies",
    "(hive)$": "$1s",
    "(?:([^f])fe|([lr])f)$": "$1$2ves",
    "(shea|lea|loa|thie)f$": "$1ves",
    sis$: "ses",
    "([ti])um$": "$1a",
    "(tomat|potat|ech|her|vet)o$": "$1oes",
    "(bu)s$": "$1ses",
    "(alias)$": "$1es",
    "(octop)us$": "$1i",
    "(ax|test)is$": "$1es",
    "(us)$": "$1es",
    "([^s]+)$": "$1s"
  }, i = {
    move: "moves",
    foot: "feet",
    goose: "geese",
    sex: "sexes",
    child: "children",
    man: "men",
    tooth: "teeth",
    person: "people"
  };
  if ([
    "sheep",
    "fish",
    "deer",
    "moose",
    "series",
    "species",
    "money",
    "rice",
    "information",
    "equipment",
    "bison",
    "cod",
    "offspring",
    "pike",
    "salmon",
    "shrimp",
    "swine",
    "trout",
    "aircraft",
    "hovercraft",
    "spacecraft",
    "sugar",
    "tuna",
    "you",
    "wood"
  ].indexOf(e.toLowerCase()) >= 0)
    return e;
  for (const o in i) {
    const s = new RegExp(`${o}$`, "i"), l = i[o];
    if (s.test(e))
      return e.replace(s, l);
  }
  for (const o in r) {
    const s = new RegExp(o, "i");
    if (s.test(e))
      return e.replace(s, r[o]);
  }
  return e;
}
function _g(e, t) {
  if (t !== void 0 && t !== 1)
    return e;
  const r = {
    "(quiz)zes$": "$1",
    "(matr)ices$": "$1ix",
    "(vert|ind)ices$": "$1ex",
    "^(ox)en$": "$1",
    "(alias)es$": "$1",
    "(octop|vir)i$": "$1us",
    "(cris|ax|test)es$": "$1is",
    "(shoe)s$": "$1",
    "(o)es$": "$1",
    "(bus)es$": "$1",
    "([m|l])ice$": "$1ouse",
    "(x|ch|ss|sh)es$": "$1",
    "(m)ovies$": "$1ovie",
    "(s)eries$": "$1eries",
    "([^aeiouy]|qu)ies$": "$1y",
    "([lr])ves$": "$1f",
    "(tive)s$": "$1",
    "(hive)s$": "$1",
    "(li|wi|kni)ves$": "$1fe",
    "(shea|loa|lea|thie)ves$": "$1f",
    "(^analy)ses$": "$1sis",
    "((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$": "$1$2sis",
    "([ti])a$": "$1um",
    "(n)ews$": "$1ews",
    "(h|bl)ouses$": "$1ouse",
    "(corpse)s$": "$1",
    "(us)es$": "$1",
    s$: ""
  }, i = {
    move: "moves",
    foot: "feet",
    goose: "geese",
    sex: "sexes",
    child: "children",
    man: "men",
    tooth: "teeth",
    person: "people"
  };
  if ([
    "sheep",
    "fish",
    "deer",
    "moose",
    "series",
    "species",
    "money",
    "rice",
    "information",
    "equipment",
    "bison",
    "cod",
    "offspring",
    "pike",
    "salmon",
    "shrimp",
    "swine",
    "trout",
    "aircraft",
    "hovercraft",
    "spacecraft",
    "sugar",
    "tuna",
    "you",
    "wood"
  ].indexOf(e.toLowerCase()) >= 0)
    return e;
  for (const o in i) {
    const s = new RegExp(`${i[o]}$`, "i");
    if (s.test(e))
      return e.replace(s, o);
  }
  for (const o in r) {
    const s = new RegExp(o, "i");
    if (s.test(e))
      return e.replace(s, r[o]);
  }
  return e;
}
function Aa(e, t, r, i = 3) {
  const a = Object.keys(e.properties);
  let o = r?.filter((s) => a.includes(s));
  return o && o.length > 0 ? o : (o = a, o.filter((s) => {
    const l = e.properties[s];
    return l && !ot(l) && !Ld(l, t);
  }).slice(0, i));
}
const Kt = "EntityPreview", ze = {
  property: `${Kt}-property`,
  valuePreview: `${Kt}-valuePreview`,
  iconCell: `${Kt}-iconCell`,
  titleCell: `${Kt}-titleCell`
}, Vd = We(Na)(({ theme: e }) => ({
  [`& .${ze.property}`]: {
    display: "flex"
  },
  [`& .${ze.valuePreview}`]: {
    height: "72px",
    padding: e.spacing(2, 3)
  },
  [`& .${ze.iconCell}`]: {
    paddingTop: e.spacing(1)
  },
  [`& .${ze.titleCell}`]: {
    width: "25%",
    padding: e.spacing(1)
  }
}));
function ua({
  entity: e,
  collection: t,
  path: r
}) {
  const i = re(), a = rn.useMemo(() => ke({
    collection: t,
    path: r,
    entityId: e.id,
    values: e.values,
    fields: i.fields
  }), [t, r, e]), o = re(), s = a.properties;
  return /* @__PURE__ */ n(Vd, { children: /* @__PURE__ */ n(zt, { "aria-label": "entity table", children: /* @__PURE__ */ E(Ut, { children: [
    /* @__PURE__ */ E(yt, { children: [
      /* @__PURE__ */ n(
        Me,
        {
          align: "right",
          component: "td",
          scope: "row",
          className: ze.titleCell,
          children: /* @__PURE__ */ n(
            X,
            {
              variant: "caption",
              color: "textSecondary",
              children: "Id"
            }
          )
        }
      ),
      /* @__PURE__ */ n(
        Me,
        {
          padding: "none",
          className: ze.iconCell,
          children: Yd("disabled", "small")
        }
      ),
      /* @__PURE__ */ n(Me, { className: ze.valuePreview, children: /* @__PURE__ */ E(B, { display: "flex", alignItems: "center", children: [
        e.id,
        o?.entityLinkBuilder && /* @__PURE__ */ n(
          "a",
          {
            href: o.entityLinkBuilder({ entity: e }),
            rel: "noopener noreferrer",
            target: "_blank",
            children: /* @__PURE__ */ n(
              ne,
              {
                "aria-label": "go-to-entity-datasource",
                size: "large",
                children: /* @__PURE__ */ n(
                  Ht,
                  {
                    fontSize: "small"
                  }
                )
              }
            )
          }
        )
      ] }) })
    ] }),
    t && Object.entries(s).map(([l, c]) => {
      const d = e.values[l];
      return /* @__PURE__ */ E(
        yt,
        {
          children: [
            /* @__PURE__ */ n(
              Me,
              {
                align: "right",
                component: "td",
                scope: "row",
                className: ze.titleCell,
                children: /* @__PURE__ */ n(
                  X,
                  {
                    sx: { paddingLeft: 2 },
                    variant: "caption",
                    color: "textSecondary",
                    children: c.name
                  }
                )
              }
            ),
            /* @__PURE__ */ n(
              Me,
              {
                padding: "none",
                className: ze.iconCell,
                children: $r(c, "disabled", "small")
              }
            ),
            /* @__PURE__ */ n(
              Me,
              {
                className: ze.valuePreview,
                children: /* @__PURE__ */ n(ue, { children: /* @__PURE__ */ n(
                  Re,
                  {
                    propertyKey: l,
                    value: d,
                    entity: e,
                    property: c,
                    size: "regular"
                  }
                ) })
              }
            )
          ]
        },
        "entity_prev" + c.name + l
      );
    })
  ] }) }) });
}
function Wd(e) {
  return e.dataType === "boolean" ? "center" : e.dataType === "number" ? e.enumValues ? "left" : "right" : e.dataType === "date" ? "right" : "left";
}
function fa(e) {
  if (e.columnWidth)
    return e.columnWidth;
  if (e.dataType === "string")
    return e.url ? 280 : e.storage ? 220 : e.enumValues ? 200 : e.multiline || e.markdown ? 300 : (e.email, 200);
  if (e.dataType === "array") {
    const t = e;
    return t.of ? Array.isArray(e.of) ? 300 : fa(t.of) : 300;
  } else
    return e.dataType === "number" ? e.enumValues ? 200 : 140 : e.dataType === "map" ? 360 : e.dataType === "date" ? 160 : e.dataType === "reference" ? 220 : e.dataType === "boolean" ? 140 : 200;
}
function ga(e) {
  return `subcollection:${e.alias ?? e.path}`;
}
function zd(e) {
  const { disabled: t, value: r, multiline: i, updateValue: a, focused: o } = e, [s, l] = M(r), c = he(!1), d = Q.useCallback(() => {
    !r && !s || s !== r && a(s);
  }, [s, r]);
  Ji(s, d, 3e3), z(
    () => {
      !o && r !== s && l(r);
    },
    [r, o]
  );
  const A = Q.createRef();
  return z(() => {
    A.current && o && !c.current ? (c.current = !0, A.current.focus({ preventScroll: !0 }), A.current.selectionStart = A.current.value.length, A.current.selectionEnd = A.current.value.length) : c.current = o;
  }, [o, A]), /* @__PURE__ */ n(
    Ha,
    {
      ref: A,
      disabled: t,
      style: {
        padding: 0,
        margin: 0,
        width: "100%",
        color: "unset",
        fontWeight: "unset",
        lineHeight: "unset",
        fontSize: "unset",
        fontFamily: "unset",
        background: "unset",
        border: "unset",
        resize: "none",
        outline: "none"
      },
      value: s ?? "",
      onChange: (u) => {
        const p = u.target.value;
        (i || !p.endsWith(`
`)) && l(p);
      },
      onBlur: () => {
        d();
      }
    }
  );
}
function Wn(e) {
  const {
    name: t,
    enumValues: r,
    error: i,
    internalValue: a,
    disabled: o,
    small: s,
    focused: l,
    updateValue: c,
    multiple: d,
    valueType: A
  } = e, [u, p] = M(!1), h = w(() => {
    p(!0);
  }, []), f = w(() => {
    p(!1);
  }, []), g = Array.isArray(a) && d || !Array.isArray(a) && !d, m = Q.createRef();
  z(() => {
    m.current && l && m.current?.focus({ preventScroll: !0 });
  }, [l, m]);
  const v = w((x) => {
    if (A === "number")
      if (d) {
        const y = x.target.value.map((k) => parseFloat(k));
        c(y);
      } else
        c(parseFloat(x.target.value));
    else if (A === "string")
      x.target.value ? c(x.target.value) : c(null);
    else
      throw Error("Missing mapping in TableSelect");
  }, [d, c, A]), b = (x) => d && Array.isArray(x) ? /* @__PURE__ */ n(
    Rr,
    {
      value: x,
      name: t,
      enumValues: r,
      size: s ? "small" : "regular"
    }
  ) : /* @__PURE__ */ n(
    Le,
    {
      enumKey: x,
      enumValues: r,
      small: s
    }
  );
  return /* @__PURE__ */ n(
    Je,
    {
      variant: "standard",
      inputRef: m,
      sx: {
        height: "100%"
      },
      open: u,
      disabled: o,
      multiple: d,
      onClose: f,
      onOpen: h,
      fullWidth: !0,
      inputProps: {
        sx: {
          height: "100% !important",
          display: "flex",
          alignItems: "center",
          padding: "0px 0 0px",
          background: "transparent !important"
        }
      },
      disableUnderline: !0,
      error: !!i,
      value: g ? d ? a.map((x) => x.toString()) : a : d ? [] : "",
      onChange: v,
      renderValue: b,
      children: vn(r).map((x) => {
        const y = x.id, k = /* @__PURE__ */ n(
          Le,
          {
            enumKey: y,
            enumValues: r,
            small: !0
          }
        );
        return d ? /* @__PURE__ */ E(
          Ge,
          {
            value: y,
            disabled: An(x),
            dense: !0,
            children: [
              /* @__PURE__ */ n(
                bn,
                {
                  checked: Array.isArray(a) && a.map((I) => I.toString()).includes(y.toString())
                }
              ),
              /* @__PURE__ */ n(an, { primary: k })
            ]
          },
          `select-${t}-${y}`
        ) : /* @__PURE__ */ n(
          Ge,
          {
            value: y,
            disabled: An(x),
            dense: !0,
            children: k
          },
          `select-${t}-${y}`
        );
      })
    },
    `table_select_${t}`
  );
}
function Ud(e) {
  const { align: t, value: r, updateValue: i, focused: a, onBlur: o, disabled: s } = e, l = r && typeof r == "number" ? r.toString() : "", [c, d] = M(l), A = Q.useCallback(() => {
    if (c !== l)
      if (c != null) {
        const h = parseFloat(c);
        if (isNaN(h))
          return;
        h != null && i(h);
      } else
        i(null);
  }, [c, r]);
  Ji(c, A, 3e3), z(
    () => {
      !a && l !== c && d(r != null ? r.toString() : null);
    },
    [r, a]
  );
  const u = Q.createRef();
  z(() => {
    u.current && a && u.current.focus({ preventScroll: !0 });
  }, [a, u]);
  const p = /^-?[0-9]+[,.]?[0-9]*$/;
  return /* @__PURE__ */ n(
    Xo,
    {
      inputRef: u,
      sx: {
        width: "100%",
        fontSize: "unset",
        fontFamily: "unset",
        background: "unset",
        border: "unset",
        resize: "none",
        outline: "none",
        padding: 0,
        margin: 0,
        color: "unset",
        fontWeight: "unset",
        lineHeight: "unset",
        textAlign: "right"
      },
      inputProps: {
        style: {
          textAlign: t
        }
      },
      disabled: s,
      disableUnderline: !0,
      value: c ?? "",
      onBlur: o,
      onChange: (h) => {
        const f = h.target.value.replace(",", ".");
        f.length === 0 && d(null), (p.test(f) || f.startsWith("-")) && d(f);
      }
    }
  );
}
function jd(e) {
  const { disabled: t, internalValue: r, updateValue: i, focused: a } = e, o = Q.createRef();
  return z(() => {
    o.current && a && o.current.focus({ preventScroll: !0 });
  }, [a, o]), /* @__PURE__ */ n(
    mn,
    {
      inputRef: o,
      color: "secondary",
      checked: Boolean(r),
      disabled: t,
      onChange: (s) => {
        const l = s.target.checked;
        i(l);
      }
    }
  );
}
function Nd(e) {
  const {
    disabled: t,
    error: r,
    mode: i,
    internalValue: a,
    updateValue: o
  } = e;
  return /* @__PURE__ */ n(
    i === void 0 || i === "date_time" ? wr : br,
    {
      value: a ?? null,
      disabled: t,
      onChange: (l) => {
        o(l);
      },
      renderInput: (l) => /* @__PURE__ */ n(
        nt,
        {
          ...l,
          fullWidth: !0,
          variant: "standard",
          error: Boolean(r),
          style: {
            height: "100%"
          },
          InputProps: {
            ...l.InputProps,
            style: { fontSize: 14 },
            disableUnderline: !0,
            endAdornment: /* @__PURE__ */ n(B, { sx: { pr: 1 }, children: l.InputProps?.endAdornment })
          }
        }
      ),
      InputAdornmentProps: {
        style: {
          fontSize: "small",
          height: 26
        }
      }
    }
  );
}
function $o(e) {
  const {
    name: t,
    internalValue: r,
    updateValue: i,
    multiselect: a,
    path: o,
    size: s,
    previewProperties: l,
    title: c,
    disabled: d,
    forceFilter: A
  } = e, [u, p] = M(!1), h = w(() => p(!0), []), f = w(() => p(!1), []), m = Ie().getCollection(o);
  if (!m)
    throw Error(`Couldn't find the corresponding collection view for the path: ${o}`);
  const v = w((D) => {
    i(D ? gn(D) : null);
  }, [i]), b = w((D) => {
    i(D.map((P) => gn(P)));
  }, [i]), x = r ? Array.isArray(r) ? r.map((D) => D.id) : r.id ? [r.id] : [] : [], y = Sr(
    {
      multiselect: a,
      path: o,
      collection: m,
      onMultipleEntitiesSelected: b,
      onSingleEntitySelected: v,
      selectedEntityIds: x,
      forceFilter: A
    }
  ), k = w(() => {
    d || y.open();
  }, [d, y]), I = !r || Array.isArray(r) && r.length === 0, C = () => r instanceof ut ? /* @__PURE__ */ n(
    Lt,
    {
      onClick: d ? void 0 : k,
      size: ct(s),
      reference: r,
      onHover: u,
      disabled: !o,
      previewProperties: l
    }
  ) : /* @__PURE__ */ n(xe, { error: "Data is not a reference" }), S = () => Array.isArray(r) ? /* @__PURE__ */ n(Z, { children: r.map(
    (D, P) => /* @__PURE__ */ n(
      B,
      {
        sx: { m: 0.5, width: "100%" },
        children: /* @__PURE__ */ n(
          Lt,
          {
            onClick: d ? void 0 : k,
            size: "tiny",
            reference: D,
            onHover: u,
            disabled: !o,
            previewProperties: l
          }
        )
      },
      `preview_array_ref_${t}_${P}`
    )
  ) }) : /* @__PURE__ */ n(xe, { error: "Data is not an array of references" });
  return m ? /* @__PURE__ */ E(
    B,
    {
      sx: { width: "100%" },
      onMouseEnter: h,
      onMouseMove: h,
      onMouseLeave: f,
      children: [
        r && !a && C(),
        r && a && S(),
        I && /* @__PURE__ */ E(
          ae,
          {
            onClick: k,
            size: "small",
            variant: "outlined",
            color: "primary",
            children: [
              "Edit ",
              c
            ]
          }
        )
      ]
    }
  ) : /* @__PURE__ */ n(xe, { error: "The specified collection does not exist" });
}
const Hd = (e) => ({
  transition: "background-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
  position: "relative",
  height: "100%",
  width: "100%",
  outline: 0,
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: e ? "start" : "center",
  alignItems: "center",
  border: "2px solid",
  borderColor: "transparent"
}), _d = (e) => ({
  background: "repeating-linear-gradient( 45deg, rgba(128, 128, 128, 0.2), rgba(128, 128, 128, 0.2) 10px, rgba(128, 128, 128, 0.25) 10px, rgba(128, 128, 128, 0.25) 20px) !important",
  borderRadius: `${e.shape.borderRadius}px`,
  border: "2px solid",
  borderColor: "transparent"
}), Jd = (e) => ({
  background: "repeating-linear-gradient( 45deg, rgba(128, 128, 128, 0.2), rgba(128, 128, 128, 0.2) 10px, rgba(128, 128, 128, 0.25) 10px, rgba(128, 128, 128, 0.25) 20px) !important",
  borderColor: e.palette.success.light
}), Zd = (e) => ({
  borderColor: e.palette.error.light
});
function qd(e) {
  const {
    propertyKey: t,
    error: r,
    value: i,
    disabled: a,
    property: o,
    entity: s,
    path: l,
    previewSize: c,
    updateValue: d
  } = e, A = _t(), {
    internalValue: u,
    setInternalValue: p,
    onFilesAdded: h,
    storage: f,
    onFileUploadComplete: g,
    storagePathBuilder: m,
    multipleFilesSupported: v
  } = qi({
    entityValues: s.values,
    entityId: s.id,
    path: l,
    property: o,
    propertyKey: t,
    storageSource: A,
    onChange: d,
    value: i,
    disabled: a
  });
  return /* @__PURE__ */ n(
    Xd,
    {
      internalValue: u,
      setInternalValue: p,
      name: t,
      disabled: a,
      autoFocus: !1,
      property: o,
      onChange: d,
      entity: s,
      storagePathBuilder: m,
      storage: f,
      multipleFilesSupported: v,
      onFilesAdded: h,
      onFileUploadComplete: g,
      previewSize: c
    }
  );
}
function Xd({
  property: e,
  name: t,
  internalValue: r,
  setInternalValue: i,
  entity: a,
  onChange: o,
  multipleFilesSupported: s,
  previewSize: l,
  disabled: c,
  autoFocus: d,
  storage: A,
  onFilesAdded: u,
  onFileUploadComplete: p,
  storagePathBuilder: h
}) {
  const [f, g] = M(!1), m = s && l === "regular" ? "small" : l;
  if (s) {
    const V = e;
    if (Array.isArray(V.of))
      throw Error("Using array properties instead of single one in `of` in ArrayProperty");
    if (V.of) {
      if (V.of.dataType !== "string")
        throw Error("Storage field using array must be of data type string");
    } else
      throw Error("Storage field using array must be of data type string");
  }
  const v = A?.metadata, b = Boolean(r), x = rt(), {
    open: y,
    getRootProps: k,
    getInputProps: I,
    isDragActive: C,
    isDragAccept: S,
    isDragReject: D
  } = hi(
    {
      accept: A.acceptedFiles ? A.acceptedFiles.map((V) => ({ [V]: [] })).reduce((V, W) => ({ ...V, ...W }), {}) : void 0,
      disabled: c,
      maxSize: A.maxSize,
      noClick: !0,
      noKeyboard: !0,
      onDrop: u,
      onDropRejected: (V, W) => {
        for (const O of V)
          for (const F of O.errors)
            x.open({
              type: "error",
              message: `Error uploading file: File is larger than ${A.maxSize} bytes`
            });
      }
    }
  ), { ...P } = k(), R = s ? "Drag 'n' drop some files here, or click here to edit" : "Drag 'n' drop a file here, or click here edit", $ = s ? e.of : e, L = ie(() => xt(m), [m]), K = Be();
  return /* @__PURE__ */ E(
    B,
    {
      ...P,
      onMouseEnter: () => g(!0),
      onMouseMove: () => g(!0),
      onMouseLeave: () => g(!1),
      sx: {
        ...Hd(b),
        ...C ? _d(K) : {},
        ...S ? Jd(K) : {},
        ...D ? Zd(K) : {}
      },
      children: [
        /* @__PURE__ */ n("input", { autoFocus: d, ...I() }),
        r.map((V, W) => {
          let O;
          return V.storagePathOrDownloadUrl ? O = /* @__PURE__ */ n(
            Kd,
            {
              property: $,
              value: V.storagePathOrDownloadUrl,
              entity: a,
              size: m
            },
            `storage_preview_${W}`
          ) : V.file && (O = /* @__PURE__ */ n(
            Xi,
            {
              entry: V,
              metadata: v,
              storagePath: h(V.file),
              onFileUploadComplete: p,
              imageSize: L,
              simple: !0
            },
            `storage_progress_${W}`
          )), O;
        }),
        !r && /* @__PURE__ */ n(
          B,
          {
            sx: {
              flexGrow: 1,
              m: 2,
              maxWidth: 200
            },
            onClick: y,
            children: /* @__PURE__ */ n(
              X,
              {
                sx: {
                  color: (V) => V.palette.mode === "light" ? "#999" : "#444"
                },
                variant: "body2",
                align: "center",
                children: R
              }
            )
          }
        ),
        f && /* @__PURE__ */ n(
          ne,
          {
            color: "inherit",
            size: "small",
            onClick: y,
            sx: {
              position: "absolute",
              bottom: 2,
              right: 2
            },
            children: /* @__PURE__ */ n(_l, { sx: {
              width: 16,
              height: 16,
              fill: "#888"
            } })
          }
        )
      ]
    }
  );
}
function Kd({
  property: e,
  value: t,
  size: r,
  entity: i
}) {
  return /* @__PURE__ */ n(
    B,
    {
      m: 1,
      position: "relative",
      children: t && /* @__PURE__ */ n(ue, { children: /* @__PURE__ */ n(
        Re,
        {
          value: t,
          property: e,
          entity: i,
          size: r
        }
      ) })
    }
  );
}
function Ct(e) {
  switch (e) {
    case "xl":
      return 400;
    case "l":
      return 280;
    case "m":
      return 140;
    case "s":
      return 80;
    case "xs":
      return 54;
    default:
      throw Error("Missing mapping for collection size -> height");
  }
}
function eA(e, t, r, i, a, o) {
  if (e && !r)
    return a.palette.mode === "dark" ? et(a.palette.background.paper, 0.03) : ye(a.palette.background.default, 0.02);
  if (o)
    return a.palette.mode === "dark" ? et(a.palette.background.paper, 0.035) : ye(a.palette.background.default, 0.025);
  if (t || i)
    return a.palette.mode === "dark" ? et(a.palette.background.paper, 0.022) : ye(a.palette.background.default, 8e-3);
}
const tA = Bi("div", {})(({
  theme: e,
  justifyContent: t,
  padding: r,
  border: i,
  width: a,
  alignItems: o,
  backgroundColor: s
}) => ({
  width: a ?? "100%",
  alignItems: o,
  backgroundColor: s,
  padding: r,
  border: i,
  justifyContent: t,
  display: "flex",
  position: "relative",
  height: "100%",
  borderRadius: "4px",
  overflow: "hidden",
  contain: "content",
  transition: "border-color 400ms ease-in-out, background-color 600ms ease"
})), nA = Bi("div", {})(({
  theme: e,
  justifyContent: t,
  scrollable: r,
  faded: i,
  fullHeight: a
}) => ({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  height: a ? "100%" : void 0,
  justifyContent: t,
  overflow: r ? "auto" : void 0,
  WebkitMaskImage: i ? "linear-gradient(to bottom, black 60%, transparent 100%)" : void 0,
  maskImage: i ? "linear-gradient(to bottom, black 60%, transparent 100%)" : void 0,
  alignItems: i || r ? "start" : void 0
})), ir = Q.memo(
  function({
    children: t,
    focused: r,
    size: i,
    selected: a,
    disabled: o,
    disabledTooltip: s,
    saved: l,
    selectedRow: c,
    error: d,
    align: A,
    allowScroll: u,
    openPopup: p,
    removePadding: h,
    fullHeight: f,
    onSelect: g,
    width: m,
    showExpandIcon: v = !0
  }) {
    const [b, x] = yi(), y = Be(), k = Q.createRef(), [I, C] = M(!1), S = ie(() => Ct(i), [i]), [D, P] = M(!1), [R, $] = M(l), L = !o && d, K = Q.createRef();
    z(() => {
      K.current && r && K.current.focus({ preventScroll: !0 });
    }, [r]), z(() => {
      l && $(!0);
      const T = setTimeout(() => {
        $(!1);
      }, 500);
      return () => {
        clearTimeout(T);
      };
    }, [l]);
    let V = y.spacing(0);
    if (!h)
      switch (i) {
        case "l":
        case "xl":
          V = y.spacing(2);
          break;
        case "m":
          V = y.spacing(1);
          break;
        case "s":
          V = y.spacing(0.5);
          break;
        default:
          V = y.spacing(0.25);
          break;
      }
    let W;
    switch (A) {
      case "right":
        W = "flex-end";
        break;
      case "center":
        W = "center";
        break;
      case "left":
      default:
        W = "flex-start";
    }
    const O = w(() => {
      if (p) {
        const T = k && k?.current?.getBoundingClientRect();
        p(T);
      }
    }, [k]), F = w((T) => {
      T.detail === 3 && O();
    }, [O]), G = w(() => {
      if (!g)
        return;
      const T = k && k?.current?.getBoundingClientRect();
      o ? g(void 0) : !a && T && g(T);
    }, [k, g, a, o]), U = w((T) => {
      G(), T.stopPropagation();
    }, [G]);
    z(() => {
      if (x) {
        const T = x.height > S;
        I !== T && C(T);
      }
    }, [x, I, S]);
    const j = !L && a;
    let se;
    R ? se = `2px solid ${y.palette.success.light}` : j ? se = "2px solid #5E9ED6" : L ? se = `2px solid ${y.palette.error.light} !important` : se = "2px solid transparent";
    const _ = !o && u && I, J = !o && !u && I, N = w(() => P(!0), []), ee = w(() => P(!1), []);
    return /* @__PURE__ */ E(
      tA,
      {
        tabIndex: a || o ? void 0 : 0,
        ref: k,
        onFocus: U,
        onClick: F,
        onMouseEnter: N,
        onMouseMove: N,
        onMouseLeave: ee,
        padding: V,
        contain: _ ? "content" : "size",
        border: se,
        justifyContent: W,
        width: m,
        alignItems: o || !I ? "center" : void 0,
        backgroundColor: eA(D, c, o, R ?? !1, y, j ?? !1),
        children: [
          /* @__PURE__ */ E(ue, { children: [
            f && !J && t,
            (!f || J) && /* @__PURE__ */ n(
              nA,
              {
                fullHeight: f ?? !1,
                justifyContent: W,
                scrollable: _ ?? !1,
                faded: J,
                children: !f && /* @__PURE__ */ n(
                  "div",
                  {
                    ref: b,
                    style: {
                      display: "flex",
                      width: "100%",
                      justifyContent: W,
                      height: f ? "100%" : void 0
                    },
                    children: t
                  }
                )
              }
            )
          ] }),
          o && D && s && /* @__PURE__ */ n(B, { sx: {
            position: "absolute",
            top: 4,
            right: 4,
            fontSize: "14px"
          }, children: /* @__PURE__ */ n(de, { title: s, children: /* @__PURE__ */ n(
            Zl,
            {
              color: "disabled",
              fontSize: "inherit"
            }
          ) }) }),
          (L || v) && /* @__PURE__ */ E(B, { sx: {
            position: "absolute",
            top: "2px",
            right: "2px"
          }, children: [
            a && !o && v && /* @__PURE__ */ n(
              ne,
              {
                ref: K,
                color: "inherit",
                size: "small",
                onClick: O,
                children: /* @__PURE__ */ E(
                  "svg",
                  {
                    className: "MuiSvgIcon-root MuiSvgIcon-fontSizeSmall",
                    fill: "#888",
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    children: [
                      /* @__PURE__ */ n(
                        "path",
                        {
                          className: "cls-2",
                          d: "M20,5a1,1,0,0,0-1-1L14,4h0a1,1,0,0,0,0,2h2.57L13.29,9.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L18,7.42V10a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1Z"
                        }
                      ),
                      /* @__PURE__ */ n(
                        "path",
                        {
                          className: "cls-2",
                          d: "M10.71,13.29a1,1,0,0,0-1.42,0L6,16.57V14a1,1,0,0,0-1-1H5a1,1,0,0,0-1,1l0,5a1,1,0,0,0,1,1h5a1,1,0,0,0,0-2H7.42l3.29-3.29A1,1,0,0,0,10.71,13.29Z"
                        }
                      )
                    ]
                  }
                )
              }
            ),
            L && /* @__PURE__ */ n(
              Oi,
              {
                arrow: !0,
                placement: "left",
                title: L.message,
                children: /* @__PURE__ */ n(
                  Jl,
                  {
                    fontSize: "inherit",
                    color: "error"
                  }
                )
              }
            )
          ] })
        ]
      }
    );
  },
  Ae
);
function rA(e) {
  return e.dataType === "string" && e.storage ? !0 : e.dataType === "array" ? Array.isArray(e.of) ? !1 : e.of?.dataType === "string" && e.of?.storage : !1;
}
const oA = Q.memo(
  function({
    propertyKey: t,
    columnIndex: r,
    customFieldValidator: i,
    value: a,
    property: o,
    align: s,
    width: l,
    height: c,
    collection: d,
    path: A,
    entity: u,
    readonly: p
  }) {
    const h = Ve(), f = re(), {
      onValueChange: g,
      size: m,
      selectedCell: v,
      focused: b,
      select: x,
      setPopupCell: y,
      selectedEntityIds: k
    } = QA(), I = k?.includes(u.id) ?? !1, C = v?.columnIndex === r && v?.entity.id === u.id, [S, D] = M(a), P = he(a), [R, $] = M(), [L, K] = M(!1), V = w(() => {
      K(!0), setTimeout(() => {
        K(!1);
      }, 100);
    }, []), W = Boolean(o.Field), O = Boolean(o.Preview), F = Jt(o), G = typeof o.disabled == "object" ? o.disabled.disabledMessage : void 0, U = Boolean(o.disabled), j = ie(() => Vt({
      property: o,
      entityId: u.id,
      customFieldValidator: i,
      name: t
    }), [u.id, o, t]);
    z(
      () => {
        Ae(a, P.current) || (D(a), P.current = a, V());
      },
      [V, a]
    );
    const se = w((ge) => {
      K(!1), j.validate(ge).then(() => {
        $(void 0), g && g({
          value: ge,
          propertyKey: t,
          setError: $,
          onValueUpdated: V,
          entity: u,
          fullPath: A,
          collection: d,
          dataSource: h,
          context: f
        });
      }).catch((q) => {
        $(q);
      });
    }, [u, g, t, j]);
    z(() => {
      j.validate(S).catch((ge) => {
        $(ge);
      });
    }, [S, j]);
    const _ = w(
      (ge) => {
        let q;
        ge === void 0 ? q = null : q = ge, P.current = q, D(q), se(q);
      },
      [se]
    );
    Te({
      property: o,
      value: S,
      setValue: _
    });
    const J = w((ge) => {
      x(ge ? {
        columnIndex: r,
        width: l,
        height: c,
        entity: u,
        cellRect: ge,
        propertyKey: t,
        collection: d
      } : void 0);
    }, [d, r, u, c, t, x, l]), N = w((ge) => {
      y(ge ? {
        columnIndex: r,
        width: l,
        height: c,
        entity: u,
        cellRect: ge,
        propertyKey: t,
        collection: d
      } : void 0);
    }, [d, r, u, c, t, l]);
    let ee, T = !1, te = !1, me = !1, fe = !1;
    if (p || F)
      return /* @__PURE__ */ n(
        ir,
        {
          size: m,
          width: l,
          focused: b,
          saved: L,
          selectedRow: I,
          value: S,
          align: s ?? "left",
          disabledTooltip: G ?? (F ? "Read only" : void 0),
          disabled: !0,
          children: /* @__PURE__ */ n(
            Re,
            {
              width: l,
              height: Ct(m),
              propertyKey: t,
              property: o,
              entity: u,
              value: a,
              size: ct(m)
            }
          )
        },
        `preview_cell_${t}_${u.id}`
      );
    if (!W && (!O || C)) {
      if (rA(o))
        ee = /* @__PURE__ */ n(
          qd,
          {
            error: R,
            disabled: U,
            focused: b,
            property: o,
            entity: u,
            path: A,
            value: S,
            previewSize: ct(m),
            updateValue: _,
            propertyKey: t
          }
        ), te = !0, fe = !0, me = !0;
      else if (C && o.dataType === "number") {
        const q = o;
        q.enumValues ? (ee = /* @__PURE__ */ n(
          Wn,
          {
            name: t,
            multiple: !1,
            disabled: U,
            focused: b,
            valueType: "number",
            small: ct(m) !== "regular",
            enumValues: q.enumValues,
            error: R,
            internalValue: S,
            updateValue: _
          }
        ), fe = !0) : (ee = /* @__PURE__ */ n(
          Ud,
          {
            align: s,
            error: R,
            focused: b,
            disabled: U,
            value: S,
            updateValue: _
          }
        ), T = !0);
      } else if (C && o.dataType === "string") {
        const q = o;
        if (q.enumValues)
          ee = /* @__PURE__ */ n(
            Wn,
            {
              name: t,
              multiple: !1,
              focused: b,
              disabled: U,
              valueType: "string",
              small: ct(m) !== "regular",
              enumValues: q.enumValues,
              error: R,
              internalValue: S,
              updateValue: _
            }
          ), fe = !0;
        else if (!q.storage && !q.markdown) {
          const je = !!q.multiline;
          ee = /* @__PURE__ */ n(
            zd,
            {
              error: R,
              disabled: U,
              multiline: je,
              focused: b,
              value: S,
              updateValue: _
            }
          ), T = !0;
        }
      } else if (o.dataType === "boolean")
        ee = /* @__PURE__ */ n(
          jd,
          {
            error: R,
            disabled: U,
            focused: b && C,
            internalValue: S,
            updateValue: _
          }
        );
      else if (o.dataType === "date")
        ee = /* @__PURE__ */ n(
          Nd,
          {
            name: t,
            error: R,
            disabled: U,
            mode: o.mode,
            focused: b,
            internalValue: S,
            updateValue: _
          }
        ), T = !0;
      else if (o.dataType === "reference")
        typeof o.path == "string" && (ee = /* @__PURE__ */ n(
          $o,
          {
            name: t,
            internalValue: S,
            updateValue: _,
            disabled: U,
            size: m,
            path: o.path,
            multiselect: !1,
            previewProperties: o.previewProperties,
            title: o.name,
            forceFilter: o.forceFilter
          }
        )), T = !1;
      else if (o.dataType === "array") {
        const q = o;
        if (!q.of && !q.oneOf)
          throw Error(`You need to specify an 'of' or 'oneOf' prop (or specify a custom field) in your array property ${t}`);
        q.of && !Array.isArray(q.of) && (q.of.dataType === "string" || q.of.dataType === "number" ? C && q.of.enumValues && (ee = /* @__PURE__ */ n(
          Wn,
          {
            name: t,
            multiple: !0,
            disabled: U,
            focused: b,
            small: ct(m) !== "regular",
            valueType: q.of.dataType,
            enumValues: q.of.enumValues,
            error: R,
            internalValue: S,
            updateValue: _
          }
        ), T = !0, fe = !0) : q.of.dataType === "reference" && (typeof q.of.path == "string" && (ee = /* @__PURE__ */ n(
          $o,
          {
            name: t,
            disabled: U,
            internalValue: S,
            updateValue: _,
            size: m,
            multiselect: !0,
            path: q.of.path,
            previewProperties: q.of.previewProperties,
            title: q.of.name,
            forceFilter: q.of.forceFilter
          }
        )), T = !1));
      }
    }
    return ee || (T = !1, te = C && !ee && !U && !F, ee = /* @__PURE__ */ n(
      Re,
      {
        width: l,
        height: c,
        entity: u,
        propertyKey: t,
        value: S,
        property: o,
        size: ct(m)
      }
    )), /* @__PURE__ */ n(
      ir,
      {
        size: m,
        width: l,
        focused: b,
        onSelect: J,
        selected: C,
        selectedRow: I,
        disabled: U || F,
        disabledTooltip: G ?? "Disabled",
        removePadding: me,
        fullHeight: fe,
        saved: L,
        error: R,
        align: s,
        allowScroll: T,
        showExpandIcon: te,
        openPopup: U ? void 0 : N,
        value: S,
        children: ee
      },
      `table_cell_${u.id}_${t}`
    );
  },
  iA
);
function iA(e, t) {
  return e.height === t.height && e.propertyKey === t.propertyKey && e.align === t.align && e.width === t.width && Ae(e.property, t.property) && Ae(e.value, t.value) && Ae(e.entity.values, t.entity.values);
}
function aA({
  containerRef: e,
  x: t,
  y: r,
  onMove: i
}) {
  let a = 0, o = 0;
  const s = (A) => {
    if (A.button !== 0 || !e.current || A.defaultPrevented)
      return;
    const { x: u, y: p } = e.current.getBoundingClientRect();
    a = A.screenX - u, o = A.screenY - p, document.addEventListener("mousemove", c), document.addEventListener("mouseup", l);
  }, l = (A) => {
    document.removeEventListener("mousemove", c), document.removeEventListener("mouseup", l), A.stopPropagation();
  }, c = (A) => {
    A.target.localName !== "input" && (i(
      A.screenX - a,
      A.screenY - o
    ), A.stopPropagation());
  }, d = () => {
    e.current && (e.current.style.top = `${r}px`, e.current.style.left = `${t}px`);
  };
  z(() => {
    const A = e.current;
    return A && A.addEventListener("mousedown", s), d(), () => {
      A && A.removeEventListener("mousedown", s);
    };
  });
}
function sA() {
  const [e, t] = M({ width: 0, height: 0 });
  return Nn(() => {
    function r() {
      t({ width: window.innerWidth, height: window.innerHeight });
    }
    return window.addEventListener("resize", r), r(), () => window.removeEventListener("resize", r);
  }, []), e;
}
const lA = ({ onResize: e }) => {
  const t = he(0), r = he(null), i = he(e);
  i.current = e;
  const a = w((s) => {
    t.current && cancelAnimationFrame(t.current), t.current = requestAnimationFrame(() => {
      i.current(s);
    });
  }, []), o = w(() => {
    const s = r.current;
    s && s.contentDocument && s.contentDocument.defaultView && s.contentDocument.defaultView.addEventListener("resize", a);
  }, [a]);
  return z(() => {
    const s = r.current;
    return () => {
      s && s.contentDocument && s.contentDocument.defaultView && s.contentDocument.defaultView.removeEventListener("resize", a);
    };
  }, [a]), /* @__PURE__ */ n(
    "object",
    {
      onLoad: o,
      ref: r,
      tabIndex: -1,
      type: "text/html",
      data: "about:blank",
      title: "",
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        pointerEvents: "none",
        zIndex: -1,
        opacity: 0
      }
    }
  );
};
function gt({
  children: e,
  position: t = "sticky",
  maxWidth: r,
  translucent: i = !0
}) {
  return /* @__PURE__ */ n(
    B,
    {
      sx: (o) => ({
        background: i ? o.palette.mode === "light" ? "rgba(255,255,255,0.6)" : sn(o.palette.background.paper, 0.1) : void 0,
        backdropFilter: i ? "blur(8px)" : void 0,
        borderTop: `1px solid ${o.palette.divider}`,
        py: 1,
        px: 2,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        position: t,
        bottom: 0,
        right: 0,
        left: 0,
        textAlign: "right",
        zIndex: 2,
        "& > *:not(:last-child)": {
          [o.breakpoints.down("md")]: {
            mr: o.spacing(1)
          },
          mr: o.spacing(2)
        }
      }),
      children: r ? /* @__PURE__ */ n(Ko, { maxWidth: r, children: e }) : e
    }
  );
}
function cA(e) {
  return e.open ? /* @__PURE__ */ n(dA, { ...e }) : null;
}
function dA({
  tableKey: e,
  entity: t,
  customFieldValidator: r,
  propertyKey: i,
  collection: a,
  path: o,
  cellRect: s,
  open: l,
  onClose: c,
  columnIndex: d,
  onCellValueChange: A
}) {
  const u = Ve(), p = re(), [h, f] = Q.useState(), [g, m] = M(), [v, b] = M(t?.values), x = a ? ke({
    collection: a,
    path: o,
    values: v,
    entityId: t?.id,
    fields: p.fields
  }) : void 0, y = sA(), k = Q.useRef(null), I = Q.useRef(!1);
  aA({
    containerRef: k,
    x: g?.x,
    y: g?.y,
    onMove: (W, O) => $({ x: W, y: O })
  }), z(
    () => {
      I.current = !1;
    },
    [i, t]
  );
  const C = w(() => {
    if (!s)
      throw Error("getInitialLocation error");
    return {
      x: s.left < y.width - s.right ? s.x + s.width / 2 : s.x - s.width / 2,
      y: s.top < y.height - s.bottom ? s.y + s.height / 2 : s.y - s.height / 2
    };
  }, [s, y.height, y.width]), S = w(({
    x: W,
    y: O
  }) => {
    const F = k.current?.getBoundingClientRect();
    if (!F)
      throw Error("normalizePosition called before draggableBoundingRect is set");
    return {
      x: Math.max(0, Math.min(W, y.width - F.width)),
      y: Math.max(0, Math.min(O, y.height - F.height))
    };
  }, [y]), D = w((W) => {
    const O = k.current?.getBoundingClientRect();
    if (!s || !O)
      return;
    const F = S(W ?? C());
    (!g || F.x !== g.x || F.y !== g.y) && m(F);
  }, [s, C, S, g]);
  z(
    () => {
      I.current = !1;
    },
    [i]
  ), Nn(
    () => {
      const W = k.current?.getBoundingClientRect();
      !s || !W || I.current || (D(), I.current = !0);
    },
    [s, D, I.current]
  ), Nn(
    () => {
      D(g);
    },
    [y, s]
  );
  const P = ie(() => {
    if (!(!x || !t))
      return na(
        t.id,
        i && x.properties[i] ? { [i]: x.properties[i] } : {},
        r
      );
  }, [o, i, x, t]), R = w(() => D(g), [g, D]), $ = w((W) => D(W), [D]), L = async (W) => (f(null), a && t && A && i ? A({
    value: W[i],
    propertyKey: i,
    entity: t,
    setError: f,
    onValueUpdated: () => {
    },
    fullPath: o,
    collection: a,
    dataSource: u,
    context: p
  }) : Promise.resolve());
  if (!t)
    return /* @__PURE__ */ n(Z, {});
  const K = t && /* @__PURE__ */ E(B, { sx: (W) => ({
    overflow: "auto",
    borderRadius: `${W.shape.borderRadius}px`,
    backgroundColor: W.palette.background.paper,
    visibility: l ? void 0 : "hidden",
    cursor: "grab"
  }), children: [
    /* @__PURE__ */ n(
      ci,
      {
        initialValues: t?.values ?? {},
        validationSchema: P,
        validateOnMount: !0,
        validate: (W) => console.debug("Validating", W),
        onSubmit: (W, O) => {
          L(W).then(() => c()).finally(() => O.setSubmitting(!1));
        },
        children: ({
          handleChange: W,
          values: O,
          errors: F,
          touched: G,
          dirty: U,
          setFieldValue: j,
          setFieldTouched: se,
          handleSubmit: _,
          isSubmitting: J
        }) => {
          if (Ae(O, v) || b(O), !t)
            return /* @__PURE__ */ n(
              xe,
              {
                error: "PopupFormField misconfiguration"
              }
            );
          if (!x)
            return /* @__PURE__ */ n(Z, {});
          const N = J, ee = {
            collection: x,
            entityId: t.id,
            values: O,
            path: o
          }, T = i && x.properties[i], te = i && T ? {
            propertyKey: i,
            disabled: J || Jt(T) || !!T.disabled,
            property: T,
            includeDescription: !1,
            underlyingValueHasChanged: !1,
            context: ee,
            tableMode: !0,
            partOfArray: !1,
            autoFocus: l,
            shouldAlwaysRerender: !0
          } : void 0;
          return /* @__PURE__ */ n(
            B,
            {
              sx: {
                width: 520,
                maxWidth: "100vw",
                maxHeight: "85vh"
              },
              children: /* @__PURE__ */ E(
                di,
                {
                  onSubmit: _,
                  noValidate: !0,
                  children: [
                    /* @__PURE__ */ n(
                      B,
                      {
                        sx: {
                          mb: 1,
                          padding: 2,
                          display: "flex",
                          flexDirection: "column",
                          position: "relative"
                        },
                        children: te && /* @__PURE__ */ n(Rt, { ...te })
                      }
                    ),
                    /* @__PURE__ */ n(gt, { children: /* @__PURE__ */ n(
                      ae,
                      {
                        variant: "contained",
                        color: "primary",
                        type: "submit",
                        disabled: N,
                        children: "Save"
                      }
                    ) })
                  ]
                }
              )
            },
            `popup_form_${e}_${t.id}_${d}`
          );
        }
      }
    ),
    h && /* @__PURE__ */ n(X, { color: "error", children: h.message })
  ] }), V = /* @__PURE__ */ E(
    B,
    {
      sx: (W) => ({
        display: "inline-block",
        position: "fixed",
        zIndex: 1300,
        boxShadow: "0 0 0 2px rgba(128,128,128,0.2)",
        backgroundColor: W.palette.background.paper,
        borderRadius: `${W.shape.borderRadius}px`,
        visibility: l ? void 0 : "hidden",
        cursor: "grab"
      }),
      ref: k,
      children: [
        /* @__PURE__ */ n(lA, { onResize: R }),
        /* @__PURE__ */ E(
          B,
          {
            sx: {
              overflow: "hidden"
            },
            children: [
              K,
              /* @__PURE__ */ n(B, { sx: {
                position: "absolute",
                top: -14,
                right: -14,
                backgroundColor: "#888",
                borderRadius: "32px"
              }, children: /* @__PURE__ */ n(
                ne,
                {
                  size: "small",
                  onClick: (W) => {
                    W.stopPropagation(), c();
                  },
                  children: /* @__PURE__ */ n(
                    qe,
                    {
                      sx: { color: "white" },
                      fontSize: "small"
                    }
                  )
                }
              ) })
            ]
          }
        )
      ]
    },
    `draggable_${i}_${t.id}_${l}`
  );
  return /* @__PURE__ */ n(_a, { container: document.body, children: V });
}
function kt(e) {
  return /* @__PURE__ */ n(
    B,
    {
      display: "flex",
      width: "100vw",
      maxHeight: "100%",
      maxWidth: "100%",
      height: "100vh",
      children: /* @__PURE__ */ n(B, { m: "auto", children: /* @__PURE__ */ n(dt, { ...e }) })
    }
  );
}
const AA = {
  "==": "==",
  "!=": "!=",
  ">": ">",
  "<": "<",
  ">=": ">=",
  "<=": "<=",
  in: "in",
  "array-contains": "Contains",
  "array-contains-any": "Any"
}, zn = ["array-contains-any", "in"];
function uA({
  name: e,
  value: t,
  setValue: r,
  dataType: i,
  isArray: a,
  enumValues: o,
  title: s
}) {
  const l = a ? ["array-contains"] : ["==", "!=", ">", "<", ">=", "<="];
  o && (a ? l.push("array-contains-any") : l.push("in"));
  const [c, d] = t || [l[0], void 0], [A, u] = M(c), [p, h] = M(d);
  function f(m, v) {
    let b = v;
    const x = zn.includes(A), y = zn.includes(m);
    x !== y && (b = y ? typeof v == "string" || typeof v == "number" ? [v] : [] : ""), typeof b == "number" && isNaN(b) && (b = void 0), u(m), h(b);
    const k = b !== null && Array.isArray(b) ? b.length > 0 : b !== void 0;
    r(
      m && k ? [m, b] : void 0
    );
  }
  const g = zn.includes(A);
  return /* @__PURE__ */ E(B, { display: "flex", width: 340, alignItems: "center", children: [
    /* @__PURE__ */ n(B, { width: 80, children: /* @__PURE__ */ n(we, { fullWidth: !0, children: /* @__PURE__ */ n(
      Je,
      {
        value: A,
        fullWidth: !0,
        onChange: (m) => {
          f(m.target.value, p);
        },
        children: l.map(
          (m) => /* @__PURE__ */ n(
            Ge,
            {
              value: m,
              children: AA[m]
            },
            `filter_op_${e}_${m}`
          )
        )
      }
    ) }) }),
    /* @__PURE__ */ n(B, { flexGrow: 1, ml: 1, children: /* @__PURE__ */ E(we, { fullWidth: !0, children: [
      !o && /* @__PURE__ */ n(
        Ja,
        {
          fullWidth: !0,
          type: i === "number" ? "number" : void 0,
          value: p !== void 0 ? p : "",
          onChange: (m) => {
            const v = i === "number" ? parseFloat(m.target.value) : m.target.value;
            f(A, v);
          }
        },
        `filter_${e}`
      ),
      o && /* @__PURE__ */ n(
        Je,
        {
          fullWidth: !0,
          multiple: g,
          value: p !== void 0 ? p : a ? [] : "",
          onChange: (m) => f(A, i === "number" ? parseInt(m.target.value) : m.target.value),
          renderValue: g ? (m) => /* @__PURE__ */ n("div", { children: m.map((v) => /* @__PURE__ */ n(
            Le,
            {
              enumKey: v,
              enumValues: o,
              small: !0
            },
            `select_value_${e}_${v}`
          )) }) : void 0,
          children: o.map((m) => /* @__PURE__ */ n(
            Ge,
            {
              value: m.id,
              children: /* @__PURE__ */ n(
                Le,
                {
                  enumKey: m.id,
                  enumValues: o,
                  small: !0
                }
              )
            },
            `select_${e}_${m.id}`
          ))
        },
        `filter-select-${g}-${e}`
      )
    ] }) }),
    p !== void 0 && /* @__PURE__ */ n(B, { ml: 1, children: /* @__PURE__ */ n(
      ne,
      {
        onClick: (m) => f(A, void 0),
        size: "small",
        children: /* @__PURE__ */ n(xi, { title: `Clear ${s}`, children: /* @__PURE__ */ n(qe, { fontSize: "small" }) })
      }
    ) })
  ] });
}
const Go = "BooleanFilterField", ar = {
  formControl: `${Go}-formControl`,
  label: `${Go}-label`
}, fA = We(
  "div"
)(({ theme: e }) => ({
  [`& .${ar.formControl}`]: {
    width: "200px"
  },
  [`& .${ar.label}`]: {
    width: "100%",
    height: "100%"
  }
}));
function gA({
  name: e,
  title: t,
  value: r,
  setValue: i
}) {
  function a(l) {
    i(
      l !== void 0 ? ["==", l] : void 0
    );
  }
  const o = r && r[1], s = !!r;
  return /* @__PURE__ */ n(fA, { children: /* @__PURE__ */ n(
    pn,
    {
      className: ar.formControl,
      labelPlacement: "end",
      checked: s && o,
      control: /* @__PURE__ */ n(
        bn,
        {
          indeterminate: !s,
          onChange: (l) => {
            a(o ? !1 : s ? void 0 : !0);
          }
        },
        `filter-${e}`
      ),
      label: s ? o ? `${t} is true` : `${t} is false` : "No filter"
    }
  ) });
}
const hA = {
  "==": "==",
  "!=": "!=",
  ">": ">",
  "<": "<",
  ">=": ">=",
  "<=": "<=",
  in: "in",
  "array-contains": "Contains",
  "array-contains-any": "Any"
}, Oo = ["array-contains-any", "in"];
function pA({
  name: e,
  isArray: t,
  mode: r,
  value: i,
  setValue: a,
  title: o
}) {
  const s = t ? ["array-contains"] : ["==", "!=", ">", "<", ">=", "<="], [l, c] = i || [s[0], void 0], [d, A] = M(l), [u, p] = M(c);
  function h(g, m) {
    let v = m;
    const b = Oo.includes(d), x = Oo.includes(g);
    b !== x && (v = x ? m ? [m] : [] : ""), A(g), p(v === null ? void 0 : v);
    const y = v !== null && Array.isArray(v) ? v.length > 0 : v !== void 0;
    a(
      g && y ? [g, v] : void 0
    );
  }
  const f = r === void 0 || r === "date_time" ? wr : br;
  return /* @__PURE__ */ E(B, { display: "flex", width: 340, alignItems: "center", children: [
    /* @__PURE__ */ n(B, { width: 80, children: /* @__PURE__ */ n(we, { fullWidth: !0, children: /* @__PURE__ */ n(
      Je,
      {
        value: d,
        fullWidth: !0,
        onChange: (g) => {
          h(g.target.value, u);
        },
        children: s.map(
          (g) => /* @__PURE__ */ n(
            Ge,
            {
              value: g,
              children: hA[g]
            },
            `filter_op_${e}_${g}`
          )
        )
      }
    ) }) }),
    /* @__PURE__ */ n(B, { flexGrow: 1, ml: 1, children: /* @__PURE__ */ n(
      f,
      {
        InputProps: {},
        renderInput: (g) => /* @__PURE__ */ n(
          Xo,
          {
            startAdornment: /* @__PURE__ */ n(Ml, { fontSize: "small" })
          }
        ),
        value: u ?? null,
        onChange: (g) => {
          h(d, g === null ? void 0 : g);
        }
      }
    ) }),
    u !== void 0 && /* @__PURE__ */ n(B, { ml: 1, children: /* @__PURE__ */ n(
      ne,
      {
        onClick: (g) => h(d, void 0),
        size: "small",
        children: /* @__PURE__ */ n(xi, { title: `Clear ${o}`, children: /* @__PURE__ */ n(qe, { fontSize: "small" }) })
      }
    ) })
  ] });
}
const mA = Q.memo(
  function({
    resizeHandleRef: t,
    columnIndex: r,
    isResizingIndex: i,
    sort: a,
    onColumnSort: o,
    onFilterUpdate: s,
    filter: l,
    column: c,
    onClickResizeColumn: d
  }) {
    const A = he(null), [u, p] = M(!1), [h, f] = Q.useState(!1), g = w((k) => {
      f(!0);
    }, []), m = w(() => {
      f(!1);
    }, []), v = w((k) => {
      s(c, k), f(!1);
    }, [c, s]), b = i === r, y = !(i !== r && i > 0) && (u || b);
    return /* @__PURE__ */ E(ue, { children: [
      /* @__PURE__ */ E(
        oe,
        {
          sx: (k) => ({
            width: c.width,
            padding: "0px 12px",
            color: y ? k.palette.text.primary : k.palette.text.secondary,
            backgroundColor: y ? ye(k.palette.background.default, 0.05) : k.palette.background.default,
            transition: "color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            height: "100%",
            fontSize: "0.750rem",
            textTransform: "uppercase",
            fontWeight: 600,
            position: c.frozen ? "sticky" : "relative",
            left: c.frozen ? 0 : void 0,
            zIndex: c.frozen ? 1 : 0
          }),
          ref: A,
          wrap: "nowrap",
          alignItems: "center",
          onMouseEnter: () => p(!0),
          onMouseMove: () => p(!0),
          onMouseLeave: () => p(!1),
          container: !0,
          children: [
            /* @__PURE__ */ n(oe, { item: !0, xs: !0, sx: {
              overflow: "hidden",
              flexShrink: 1
            }, children: /* @__PURE__ */ E(B, { sx: {
              display: "flex",
              justifyContent: c.headerAlign,
              alignItems: "center",
              flexDirection: "row"
            }, children: [
              /* @__PURE__ */ n(B, { sx: {
                paddingTop: "4px"
              }, children: c.icon && c.icon(u || h) }),
              /* @__PURE__ */ n(B, { sx: {
                margin: "0px 4px",
                overflow: "hidden",
                justifyContent: c.align,
                flexShrink: 1
              }, children: c.title })
            ] }) }),
            c.sortable && (a || y || h) && /* @__PURE__ */ n(oe, { item: !0, children: /* @__PURE__ */ n(
              Nr,
              {
                color: "secondary",
                variant: "dot",
                overlap: "circular",
                invisible: !a,
                children: /* @__PURE__ */ E(
                  ne,
                  {
                    size: "small",
                    sx: (k) => ({
                      backgroundColor: k.palette.mode === "light" ? "#f5f5f5" : k.palette.background.default
                    }),
                    onClick: () => {
                      o(c.key);
                    },
                    children: [
                      !a && /* @__PURE__ */ n(Ao, { fontSize: "small" }),
                      a === "asc" && /* @__PURE__ */ n(Ao, { fontSize: "small" }),
                      a === "desc" && /* @__PURE__ */ n(Il, { fontSize: "small" })
                    ]
                  }
                )
              }
            ) }),
            c.filter && /* @__PURE__ */ n(oe, { item: !0, children: /* @__PURE__ */ n(
              Nr,
              {
                color: "secondary",
                variant: "dot",
                overlap: "circular",
                invisible: !l,
                children: /* @__PURE__ */ n(
                  ne,
                  {
                    sx: (k) => ({
                      backgroundColor: k.palette.mode === "light" ? "#f5f5f5" : k.palette.background.default
                    }),
                    size: "small",
                    onClick: g,
                    children: /* @__PURE__ */ n(
                      Sl,
                      {
                        fontSize: "small",
                        color: u || h ? void 0 : "disabled"
                      }
                    )
                  }
                )
              }
            ) }),
            c.resizable && /* @__PURE__ */ n(
              B,
              {
                ref: t,
                sx: (k) => ({
                  position: "absolute",
                  height: "100%",
                  width: "4px",
                  top: 0,
                  right: 0,
                  cursor: "col-resize",
                  backgroundColor: y ? k.palette.mode === "dark" ? et(k.palette.background.default, 0.1) : ye(k.palette.background.default, 0.15) : void 0
                }),
                onMouseDown: d ? () => d(r, c) : void 0
              }
            )
          ]
        }
      ),
      c.sortable && A?.current && /* @__PURE__ */ n(
        ei,
        {
          id: h ? `popover_${c.key}` : void 0,
          open: h,
          elevation: 1,
          anchorEl: A.current,
          onClose: m,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "right"
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "right"
          },
          children: /* @__PURE__ */ n(
            bA,
            {
              column: c,
              filter: l,
              onHover: u,
              onFilterUpdate: v
            }
          )
        }
      )
    ] });
  },
  Ae
);
function bA({
  column: e,
  onFilterUpdate: t,
  filter: r,
  onHover: i
}) {
  const a = e.key, [o, s] = M(r), l = (A) => {
    t(o);
  }, c = (A) => {
    t(void 0);
  }, d = !!r;
  return /* @__PURE__ */ E(Z, { children: [
    /* @__PURE__ */ n(B, { p: 2, sx: {
      fontSize: "0.750rem",
      fontWeight: 600,
      textTransform: "uppercase"
    }, children: e.title ?? a }),
    /* @__PURE__ */ n(jt, {}),
    e.filter && /* @__PURE__ */ n(B, { p: 2, children: wA(a, e.filter, o, s) }),
    /* @__PURE__ */ E(
      B,
      {
        display: "flex",
        justifyContent: "flex-end",
        m: 2,
        children: [
          /* @__PURE__ */ n(B, { mr: 1, children: /* @__PURE__ */ n(
            ae,
            {
              disabled: !d,
              color: "primary",
              type: "reset",
              "aria-label": "filter clear",
              onClick: c,
              children: "Clear"
            }
          ) }),
          /* @__PURE__ */ n(
            ae,
            {
              variant: "outlined",
              color: "primary",
              onClick: l,
              children: "Filter"
            }
          )
        ]
      }
    )
  ] });
}
function wA(e, t, r, i) {
  if (t.dataType === "number" || t.dataType === "string") {
    const a = t.dataType, o = t.title, s = t.enumValues;
    return /* @__PURE__ */ n(
      uA,
      {
        value: r,
        setValue: i,
        name: e,
        dataType: a,
        isArray: t.isArray,
        enumValues: s,
        title: o
      }
    );
  } else if (t.dataType === "boolean") {
    const a = t.title;
    return /* @__PURE__ */ n(
      gA,
      {
        value: r,
        setValue: i,
        name: e,
        title: a
      }
    );
  } else if (t.dataType === "date") {
    const a = t.title;
    return /* @__PURE__ */ n(
      pA,
      {
        value: r,
        setValue: i,
        name: e,
        mode: t.dateMode,
        isArray: t.isArray,
        title: a
      }
    );
  }
  return /* @__PURE__ */ n("div", { children: `Currently the field ${t.dataType} is not supported` });
}
const Lo = ({
  columns: e,
  currentSort: t,
  onColumnSort: r,
  onFilterUpdate: i,
  sortByProperty: a,
  filter: o,
  onColumnResize: s,
  onColumnResizeEnd: l
}) => {
  const c = e.map(() => Oa()), [d, A] = M(-1), u = w((x, y, k) => {
    const I = e[x], C = 100, S = 800, D = y > S ? S : y < C ? C : y, P = {
      width: D,
      key: I.key,
      column: { ...I, width: D }
    };
    k ? l(P) : s(P);
  }, [e, s, l]), p = w((x) => {
    if (d >= 0) {
      const y = c[d].current?.parentElement?.getBoundingClientRect().left;
      return y ? x.clientX - y : void 0;
    }
  }, [c, d]), h = w((x) => {
    document.body.style.cursor = x ? "col-resize" : "auto";
  }, []), f = w((x) => {
    x.stopPropagation(), x.preventDefault();
    const y = p(x);
    y && u(d, y, !1);
  }, [u, p, d]), g = w((x) => {
    x.stopPropagation(), x.preventDefault();
    const y = p(x);
    y && u(d, y, !0), A(-1), h(!1);
  }, [u, p, d, h]), m = w(() => {
    document.removeEventListener("mousemove", f), document.removeEventListener("mouseup", g);
  }, [f, g]), v = w(() => {
    document.addEventListener("mousemove", f), document.addEventListener("mouseup", g);
  }, [f, g]);
  z(() => (d >= 0 ? v() : m(), () => {
    m();
  }), [v, d, m]);
  const b = w((x) => {
    A(x), h(!0);
  }, [h]);
  return /* @__PURE__ */ n(B, { sx: (x) => ({
    position: "sticky",
    minWidth: "100%",
    backgroundColor: x.palette.background.default,
    display: "flex",
    width: "fit-content",
    flexDirection: "row",
    top: 0,
    left: 0,
    zIndex: 2,
    height: 50,
    borderBottom: `1px solid ${x.palette.divider}`
  }), children: e.map((x, y) => {
    const k = e[y], I = k && o && o[k.key] ? o[k.key] : void 0;
    return /* @__PURE__ */ n(ue, { children: /* @__PURE__ */ n(
      mA,
      {
        resizeHandleRef: c[y],
        columnIndex: y,
        isResizingIndex: d,
        onFilterUpdate: i,
        filter: I,
        sort: a === k.key ? t : void 0,
        onColumnSort: r,
        onClickResizeColumn: b,
        column: k
      }
    ) }, "header_" + k.key);
  }) });
}, vA = Za("div", {})(({
  theme: e,
  size: t,
  cursor: r,
  hovered: i
}) => ({
  display: "flex",
  minWidth: "100%",
  height: Ct(t),
  cursor: r,
  flexDirection: "row",
  fontSize: "0.875rem",
  borderBottom: `1px solid ${e.palette.divider}`,
  backgroundColor: i ? e.palette.mode === "dark" ? et(e.palette.background.paper, 0.01) : "rgb(252, 252, 253)" : void 0
})), yA = Q.memo(
  function({
    rowData: t,
    rowIndex: r,
    children: i,
    onRowClick: a,
    size: o,
    style: s,
    hoverRow: l
  }) {
    const [c, d] = M(!1), A = w((h) => a ? a({
      rowData: t,
      rowIndex: r,
      event: h
    }) : void 0, [a, t, r]), u = w(() => d(!0), []), p = w(() => d(!1), []);
    return /* @__PURE__ */ n(
      vA,
      {
        onClick: A,
        size: o,
        cursor: a ? "pointer" : void 0,
        hovered: l && c,
        style: { ...s, width: "fit-content" },
        onMouseEnter: u,
        onMouseMove: u,
        onMouseLeave: p,
        children: i
      }
    );
  },
  Ae
), xA = Q.memo(
  function(t) {
    return t.rowData && t.cellRenderer(
      {
        cellData: t.cellData,
        rowData: t.rowData,
        rowIndex: t.rowIndex,
        isScrolling: !1,
        column: t.column,
        columns: t.columns,
        columnIndex: t.columnIndex,
        width: t.column.width
      }
    );
  },
  (e, t) => Ae(e, t)
), Bn = Zo({});
Bn.displayName = "VirtualListContext";
const EA = La(({
  children: e,
  ...t
}, r) => /* @__PURE__ */ n(Bn.Consumer, { children: (i) => {
  const a = i.customView;
  return a ? /* @__PURE__ */ E(B, { sx: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    overflow: "auto"
  }, children: [
    /* @__PURE__ */ n(Lo, { ...i }),
    /* @__PURE__ */ n(B, { sx: {
      flexGrow: 1,
      position: "sticky",
      left: 0
    }, children: a })
  ] }) : /* @__PURE__ */ E(
    "div",
    {
      ref: r,
      ...t,
      children: [
        /* @__PURE__ */ n(Lo, { ...i }),
        e
      ]
    }
  );
} })), BA = Q.memo(
  function({
    data: t,
    onResetPagination: r,
    onEndReached: i,
    size: a = "m",
    columns: o,
    onRowClick: s,
    onColumnResize: l,
    filter: c,
    checkFilterCombination: d,
    onFilterUpdate: A,
    sortBy: u,
    error: p,
    emptyMessage: h,
    onSortByUpdate: f,
    loading: g,
    cellRenderer: m,
    hoverRow: v
  }) {
    const b = u ? u[0] : void 0, x = u ? u[1] : void 0, [y, k] = M(o), I = he(null), C = he(0);
    z(() => {
      k(o);
    }, [o]);
    const [S, D] = yi(), P = w((J) => {
      k(y.map((N) => N.key === J.column.key ? J.column : N));
    }, [y]), R = w((J) => {
      k(y.map((N) => N.key === J.column.key ? J.column : N)), l && l(J);
    }, [y, l]), $ = he();
    z(() => {
      $.current = c;
    }, [c]);
    const L = w(() => {
      C.current = 0, I.current && I.current.scrollTo(I.current?.scrollLeft, 0);
    }, []), K = w((J) => {
      const N = b === J && x === "desc", T = b === J && x === "asc" ? "desc" : N ? void 0 : "asc", te = N ? void 0 : J, me = $.current, fe = T && te ? [te, T] : void 0;
      me && d && !d(me, fe) && A && A(void 0), r && r(), f && f(fe), L();
    }, [d, x, A, r, f, L, b]), V = w(() => {
      C.current = 0, f && f(void 0);
    }, [f]), W = Math.max((t?.length ?? 0) * Ct(a) - D.height, 0), O = w((J) => {
      i && (t?.length ?? 0) > 0 && J > C.current + 500 && (C.current = J, i());
    }, [t, i]), F = w(({
      scrollOffset: J,
      scrollUpdateWasRequested: N
    }) => {
      !N && J >= W - 500 && O(J);
    }, [W, O]), G = w((J, N) => {
      C.current = 0;
      const ee = $.current;
      let T = ee ? { ...ee } : {};
      N ? T[J.key] = N : delete T[J.key], !d || d(T, b && x ? [b, x] : void 0) || (T = N ? { [J.key]: N } : {}), A && A(T), J.key !== b && V();
    }, [d, x, A, V, b]), U = w(() => /* @__PURE__ */ E(
      B,
      {
        sx: {
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        },
        children: [
          /* @__PURE__ */ n(X, { variant: "h6", children: "Error fetching data from the data source" }),
          p?.message && /* @__PURE__ */ n(X, { children: p?.message })
        ]
      }
    ), [p?.message]), j = w(() => g ? /* @__PURE__ */ n(kt, {}) : /* @__PURE__ */ E(
      B,
      {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        padding: 2,
        children: [
          /* @__PURE__ */ n(B, { padding: 1, children: /* @__PURE__ */ n(Cl, {}) }),
          /* @__PURE__ */ n(X, { children: h })
        ]
      }
    ), [h, g]), se = !g && (t?.length ?? 0) === 0, _ = p ? U() : se ? j() : void 0;
    return /* @__PURE__ */ n(
      B,
      {
        ref: S,
        sx: {
          height: "100%",
          width: "100%"
        },
        children: /* @__PURE__ */ n(
          Bn.Provider,
          {
            value: {
              data: t,
              size: a,
              cellRenderer: m,
              columns: y,
              currentSort: x,
              onRowClick: s,
              customView: _,
              onColumnResize: P,
              onColumnResizeEnd: R,
              filter: $.current,
              onColumnSort: K,
              onFilterUpdate: G,
              sortByProperty: b,
              hoverRow: v ?? !1
            },
            children: /* @__PURE__ */ n(
              CA,
              {
                outerRef: I,
                width: D.width,
                height: D.height,
                itemCount: t?.length ?? 0,
                onScroll: F,
                itemSize: Ct(a)
              },
              a
            )
          }
        )
      }
    );
  },
  Ae
);
function CA({
  outerRef: e,
  width: t,
  height: r,
  itemCount: i,
  onScroll: a,
  itemSize: o
}) {
  const s = w(({ index: l, style: c }) => /* @__PURE__ */ n(Bn.Consumer, { children: ({
    onRowClick: d,
    data: A,
    columns: u,
    size: p = "m",
    cellRenderer: h,
    hoverRow: f
  }) => {
    const g = A && A[l];
    return /* @__PURE__ */ n(
      yA,
      {
        rowData: g,
        rowIndex: l,
        onRowClick: d,
        columns: u,
        hoverRow: f,
        style: {
          ...c,
          top: `calc(${c.top}px + 50px)`
        },
        size: p,
        children: u.map((m, v) => {
          const b = g && g[m.key];
          return /* @__PURE__ */ n(
            xA,
            {
              dataKey: m.key,
              cellRenderer: h,
              column: m,
              columns: u,
              rowData: g,
              cellData: b,
              rowIndex: l,
              columnIndex: v
            },
            `cell_${m.key}`
          );
        })
      },
      `row_${l}`
    );
  } }), []);
  return /* @__PURE__ */ n(
    kl,
    {
      outerRef: e,
      innerElementType: EA,
      width: t,
      height: r,
      overscanCount: 4,
      itemCount: i,
      onScroll: a,
      itemSize: o,
      children: s
    }
  );
}
function Lr({
  entity: e,
  width: t,
  frozen: r,
  isSelected: i,
  selectionEnabled: a,
  size: o,
  toggleEntitySelection: s,
  onCopyClicked: l,
  onEditClicked: c,
  onDeleteClicked: d
}) {
  const A = Be(), u = Oe(A.breakpoints.up("md")), p = Boolean(c), h = Boolean(l), f = Boolean(d), [g, m] = Q.useState(null), v = w((C) => {
    m(C.currentTarget), C.stopPropagation();
  }, [m]), b = w(() => {
    m(null);
  }, [m]), x = w((C) => {
    s && s(e), C.preventDefault(), C.stopPropagation();
  }, [e, s]), y = w((C) => {
    C.stopPropagation(), d && d(e), m(null);
  }, [e, d, m]), k = w((C) => {
    C.stopPropagation(), l && l(e), m(null);
  }, [e, l, m]), I = w((C) => {
    C.stopPropagation(), s && s(e);
  }, [e, s]);
  return /* @__PURE__ */ E(
    B,
    {
      style: {
        width: t
      },
      onClick: I,
      sx: (C) => ({
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        position: r ? "sticky" : "initial",
        left: r ? 0 : "initial",
        background: C.palette.mode === "dark" ? sn(C.palette.background.default, 0.96) : sn(C.palette.background.default, 0.96),
        contain: "strict",
        zIndex: 1
      }),
      children: [
        (p || f || a) && /* @__PURE__ */ E(B, { sx: {
          minWidth: 138,
          display: "flex",
          justifyContent: "center"
        }, children: [
          p && /* @__PURE__ */ n(de, { title: `Edit ${e.id}`, children: /* @__PURE__ */ n(
            ne,
            {
              onClick: (C) => {
                C.stopPropagation(), c && c(e);
              },
              size: u ? "medium" : "small",
              children: /* @__PURE__ */ n(bs, {})
            }
          ) }),
          a && /* @__PURE__ */ n(de, { title: `Select ${e.id}`, children: /* @__PURE__ */ n(
            bn,
            {
              size: u ? "medium" : "small",
              checked: i,
              onChange: x
            }
          ) }),
          (h || f) && /* @__PURE__ */ n(
            ne,
            {
              onClick: v,
              size: u ? "medium" : "small",
              children: /* @__PURE__ */ n(ws, {})
            }
          ),
          (h || f) && /* @__PURE__ */ E(
            qa,
            {
              anchorEl: g,
              open: Boolean(g),
              onClose: b,
              elevation: 1,
              children: [
                f && /* @__PURE__ */ E(Ge, { onClick: y, children: [
                  /* @__PURE__ */ n(Hr, { children: /* @__PURE__ */ n(Jn, {}) }),
                  /* @__PURE__ */ n(an, { primary: "Delete" })
                ] }),
                h && /* @__PURE__ */ E(Ge, { onClick: k, children: [
                  /* @__PURE__ */ n(Hr, { children: /* @__PURE__ */ n(vs, {}) }),
                  /* @__PURE__ */ n(an, { primary: "Copy" })
                ] })
              ]
            }
          )
        ] }),
        o !== "xs" && /* @__PURE__ */ n(B, { sx: {
          width: 138,
          textAlign: "center",
          textOverflow: "ellipsis",
          overflow: "hidden"
        }, children: e ? /* @__PURE__ */ E(
          X,
          {
            className: "mono",
            variant: "caption",
            color: "textSecondary",
            children: [
              " ",
              e.id,
              " "
            ]
          }
        ) : /* @__PURE__ */ n(Ue, { variant: "text" }) })
      ]
    }
  );
}
function kA({ onTextSearch: e }) {
  const [t, r] = M(""), [i, a] = M(!1), o = on(t);
  Q.useEffect(() => {
    e(o || void 0);
  }, [o]);
  const s = w(() => {
    r(""), e(void 0);
  }, []);
  return /* @__PURE__ */ n(we, { children: /* @__PURE__ */ E(B, { sx: (l) => ({
    position: "relative",
    display: "flex",
    alignItems: "center",
    height: 40,
    minWidth: "200px",
    borderRadius: `${l.shape.borderRadius}px`,
    backgroundColor: l.palette.mode === "light" ? _n(l.palette.common.black, 0.05) : Ot(l.palette.background.default, 0.2),
    "&:hover": {
      backgroundColor: l.palette.mode === "light" ? _n(l.palette.common.black, 0.1) : Ot(l.palette.background.default, 0.3)
    },
    marginLeft: l.spacing(1),
    [l.breakpoints.up("sm")]: {
      marginLeft: l.spacing(1),
      width: "auto"
    }
  }), children: [
    /* @__PURE__ */ n(B, { sx: (l) => ({
      padding: l.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }), children: /* @__PURE__ */ n(ql, { htmlColor: "#888" }) }),
    /* @__PURE__ */ n(
      Ei,
      {
        placeholder: "Search",
        value: t,
        onChange: (l) => {
          r(l.target.value);
        },
        onFocus: () => a(!0),
        onBlur: () => a(!1),
        sx: {
          color: "inherit",
          minHeight: "inherit"
        },
        inputProps: {
          sx: (l) => ({
            padding: l.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${l.spacing(4)})`,
            transition: l.transitions.create("width"),
            width: "100%",
            [l.breakpoints.up("sm")]: {
              width: i ? "20ch" : "12ch"
            }
          }),
          "aria-label": "search"
        },
        endAdornment: t ? /* @__PURE__ */ n(
          ne,
          {
            size: "small",
            onClick: s,
            children: /* @__PURE__ */ n(qe, { fontSize: "small" })
          }
        ) : /* @__PURE__ */ n("div", { style: { width: 26 } })
      }
    )
  ] }) });
}
const IA = We(Ei)(({ theme: e }) => ({
  "label + &": {},
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: e.palette.mode === "light" ? _n(e.palette.common.black, 0.05) : Ot(e.palette.background.default, 0.2),
    fontSize: 14,
    fontWeight: e.typography.fontWeightMedium,
    padding: "8px 26px 8px 12px",
    transition: e.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderRadius: 4
    }
  }
}));
function SA(e) {
  return /* @__PURE__ */ n(
    Rl,
    {
      input: /* @__PURE__ */ n(IA, {}),
      renderValue: (t) => t.toUpperCase(),
      ...e,
      MenuProps: {
        MenuListProps: {
          disablePadding: !0,
          style: {
            borderRadius: 4
          }
        },
        elevation: 1
      },
      children: e.children
    }
  );
}
function FA(e) {
  return /* @__PURE__ */ n(
    Dl,
    {
      ...e,
      sx: (t) => ({
        backgroundColor: t.palette.background.default,
        fontSize: 14,
        fontWeight: t.typography.fontWeightMedium,
        paddingTop: t.spacing(1),
        paddingBottom: t.spacing(1),
        "&:hover": {
          backgroundColor: Ot(t.palette.background.default, 0.1)
        },
        "&:focus": {
          backgroundColor: Ot(t.palette.background.default, 0.2),
          "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
            color: t.palette.text.primary
          }
        }
      }),
      children: e.children
    }
  );
}
function RA(e) {
  const t = Be(), r = Oe(t.breakpoints.up("md")), i = !e.forceFilter && e.filterIsSet && /* @__PURE__ */ n(de, { title: "Clear filter", children: /* @__PURE__ */ n(
    ne,
    {
      sx: { height: "fit-content" },
      "aria-label": "filter clear",
      onClick: e.clearFilter,
      size: "medium",
      children: /* @__PURE__ */ n(Xl, {})
    }
  ) }), a = /* @__PURE__ */ n(
    SA,
    {
      variant: "standard",
      value: e.size,
      sx: { width: 56, height: 40 },
      onChange: (o) => e.onSizeChanged(o.target.value),
      renderValue: (o) => o.toUpperCase(),
      children: ["xs", "s", "m", "l", "xl"].map((o) => /* @__PURE__ */ n(
        FA,
        {
          value: o,
          children: o.toUpperCase()
        },
        `size-select-${o}`
      ))
    }
  );
  return /* @__PURE__ */ E(
    B,
    {
      sx: {
        minHeight: 56,
        overflowX: "auto",
        [t.breakpoints.down("sm")]: {
          px: t.spacing(1)
        },
        px: t.spacing(2),
        backgroundColor: t.palette.background.default,
        borderBottom: `1px solid ${t.palette.divider}`,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
      },
      children: [
        /* @__PURE__ */ E(
          B,
          {
            display: "flex",
            alignItems: "center",
            sx: {
              "& > *": {
                [t.breakpoints.down("md")]: {
                  marginRight: `${t.spacing(1)} !important`
                },
                marginRight: `${t.spacing(2)} !important`
              }
            },
            children: [
              e.title && /* @__PURE__ */ n(ti, { lgDown: !0, children: e.title }),
              a,
              e.actionsStart,
              i
            ]
          }
        ),
        /* @__PURE__ */ E(B, { sx: {
          display: "flex",
          alignItems: "center",
          "& > *": {
            [t.breakpoints.down("md")]: {
              marginRight: `${t.spacing(0.5)} !important`
            },
            marginRight: `${t.spacing(1)} !important`
          }
        }, children: [
          r && /* @__PURE__ */ n(B, { width: 22, children: e.loading && /* @__PURE__ */ n(dt, { size: 16, thickness: 8 }) }),
          e.onTextSearch && /* @__PURE__ */ n(
            kA,
            {
              onTextSearch: e.onTextSearch
            },
            "search-bar"
          ),
          e.actions
        ] })
      ]
    }
  );
}
const DA = {}, ha = Q.createContext(DA), QA = () => Ye(ha), pa = Q.memo(
  function({
    fullPath: t,
    initialFilter: r,
    initialSort: i,
    filterCombinations: a,
    forceFilter: o,
    actionsStart: s,
    actions: l,
    title: c,
    tableRowActionsBuilder: d,
    selectionController: A,
    highlightedEntities: u,
    onEntityClick: p,
    onColumnResize: h,
    onSizeChanged: f,
    textSearchEnabled: g = !1,
    hoverRow: m = !0,
    inlineEditing: v = !1,
    tableController: {
      data: b,
      dataLoading: x,
      noMoreToLoad: y,
      dataLoadingError: k,
      filterValues: I,
      setFilterValues: C,
      sortBy: S,
      setSortBy: D,
      searchString: P,
      setSearchString: R,
      clearFilter: $,
      itemCount: L,
      setItemCount: K,
      pageSize: V,
      paginationEnabled: W,
      checkFilterCombination: O
    },
    ...F
  }) {
    const G = Be(), U = Oe(G.breakpoints.up("md")), j = Boolean(o), se = A?.selectedEntities?.length > 0 ? A?.selectedEntities : u, _ = Q.useRef(Math.random().toString(36)), J = re(), N = Ve(), ee = At(), T = ie(() => ke({
      collection: F,
      path: t,
      fields: J.fields
    }), [F, t]), [te, me] = Q.useState(T.defaultSize ?? "m"), [fe, ge] = Q.useState(void 0), [q, je] = Q.useState(void 0), [qt, it] = Q.useState(!1), ht = se?.map((H) => H.id), Cn = !!I && Object.keys(I).length > 0, Xe = ie(() => {
      const H = F.subcollections?.map((le) => ({
        id: ga(le),
        name: le.name,
        width: 200,
        dependencies: [],
        Builder: ({ entity: pe }) => /* @__PURE__ */ n(
          ae,
          {
            color: "primary",
            variant: "outlined",
            startIcon: /* @__PURE__ */ n(
              mr,
              {
                fontSize: "small"
              }
            ),
            onClick: (ce) => {
              ce.stopPropagation(), ee.open({
                path: t,
                entityId: pe.id,
                selectedSubPath: le.alias ?? le.path,
                collection: F,
                updateUrl: !0
              });
            },
            children: le.name
          }
        )
      })) ?? [];
      return [...F.additionalFields ?? F.additionalColumns ?? [], ...H];
    }, [F, t]), kn = w(
      ({
        name: H,
        value: le,
        property: pe,
        entityId: ce
      }) => N.checkUniqueField(t, H, le, pe, ce),
      [t]
    ), In = () => {
      !W || x || y || L !== void 0 && K(L + V);
    }, Sn = w(() => {
      K(V);
    }, [V]), Fn = w(({ rowData: H }) => {
      if (!v)
        return p && p(H);
    }, [p, v]), Y = w((H) => {
      f && f(H), me(H);
    }, []), be = w((H) => R(H), []), Ne = ie(() => Xe ? Xe.map((H) => ({ [H.id]: H })).reduce((H, le) => ({ ...H, ...le }), {}) : {}, [Xe]);
    z(() => {
      const H = (le) => {
        le.keyCode === 27 && Dn();
      };
      return document.addEventListener("keydown", H, !1), () => {
        document.removeEventListener("keydown", H, !1);
      };
    });
    const Rn = w((H) => {
      ge(H), it(!0);
    }, []), Dn = w(() => {
      ge(void 0), it(!1);
    }, []), Qn = w(() => {
      je(void 0), it(!0);
    }, []), Xt = MA(T, !0), Tn = kn, Vr = w(({
      column: H,
      columnIndex: le,
      rowData: pe,
      rowIndex: ce
    }) => {
      const ve = pe, at = H.key, Dt = sa(F.properties, at);
      if (!Dt)
        return null;
      const pt = $e({
        propertyOrBuilder: Dt,
        path: t,
        propertyValue: ve.values ? Bt(ve.values, at) : void 0,
        values: ve.values,
        entityId: ve.id,
        fields: J.fields
      });
      return pt ? /* @__PURE__ */ n(ue, { children: ve ? /* @__PURE__ */ n(
        oA,
        {
          readonly: !v,
          align: H.align ?? "left",
          propertyKey: at,
          property: pt,
          setFocused: it,
          value: ve?.values ? Bt(ve.values, at) : void 0,
          collection: F,
          customFieldValidator: Tn,
          columnIndex: le,
          width: H.width,
          height: Ct(te),
          entity: ve,
          path: ve.path
        },
        `property_table_cell_${ve.id}_${at}`
      ) : _e() }) : null;
    }, [F, Tn, t, v, te, ht]), Wr = w(({
      column: H,
      rowData: le,
      width: pe
    }) => {
      const ce = le, ve = Ne[H.key], at = ve.dependencies ? Object.entries(ce.values).filter(([pt, jr]) => ve.dependencies.includes(pt)).reduce((pt, jr) => ({ ...pt, ...jr }), {}) : ce;
      ve.builder && console.warn("`additionalField.builder` is deprecated. Use `additionalField.Builder` instead.");
      const Dt = ve.builder ?? ve.Builder;
      if (!Dt)
        throw new Error("No builder provided for additional field");
      return /* @__PURE__ */ n(
        ir,
        {
          width: pe,
          size: te,
          focused: qt,
          value: at,
          selected: !1,
          selectedRow: ht?.includes(ce.id) ?? !1,
          disabled: !0,
          align: "left",
          allowScroll: !1,
          showExpandIcon: !1,
          disabledTooltip: "This column can't be edited directly",
          children: /* @__PURE__ */ n(ue, { children: /* @__PURE__ */ n(
            Dt,
            {
              entity: ce,
              context: J
            }
          ) })
        },
        `additional_table_cell_${ce.id}_${H.key}`
      );
    }, [Ne, te, ht]), zr = ie(
      () => {
        const H = Object.entries(T.properties).flatMap(([pe, ce]) => ce.dataType === "map" && ce.spreadChildren && ce.properties ? Object.keys(ce.properties).map((ve) => `${pe}.${ve}`) : [pe]).map((pe) => {
          const ce = la(T.properties, pe);
          if (!ce)
            throw Error("Internal error: no property found in path " + pe);
          return {
            key: pe,
            property: ce,
            align: Wd(ce),
            icon: (ve) => $r(ce, ve ? void 0 : "disabled", "small"),
            title: ce.name ?? pe,
            sortable: o ? Object.keys(o).includes(pe) : !0,
            filter: j ? void 0 : ba(ce),
            width: fa(ce),
            resizable: !0
          };
        }), le = Xe ? Xe.map((pe) => ({
          key: pe.id,
          type: "additional",
          align: "left",
          sortable: !1,
          title: pe.name,
          width: pe.width ?? 200
        })) : [];
        return [...H, ...le];
      },
      [Xe, j, o, T.properties]
    ), Ur = ie(() => ({
      key: "id_ewcfedcswdf3",
      width: U ? 160 : 130,
      title: "ID",
      resizable: !1,
      frozen: U,
      headerAlign: "center"
    }), [U]), Da = ie(() => [
      Ur,
      ...Xt.map((H) => zr.find((le) => le.key === H)).filter((H) => !!H)
    ], [zr, Xt, Ur]), Qa = w((H) => {
      const le = H.column, pe = H.columns, ce = le.key;
      if (H.columnIndex === 0)
        return d ? d({
          entity: H.rowData,
          size: te,
          width: le.width,
          frozen: le.frozen
        }) : /* @__PURE__ */ n(
          Lr,
          {
            entity: H.rowData,
            width: le.width,
            frozen: le.frozen,
            size: te
          }
        );
      if (Ne[ce])
        return Wr(H);
      if (H.columnIndex < pe.length + 1)
        return Vr(H);
      throw Error("Internal: columns not mapped properly");
    }, [Ne, d, te, Wr, Vr]), Ta = w((H) => {
      C({ ...H, ...o });
    }, [o]);
    return /* @__PURE__ */ n(
      ha.Provider,
      {
        value: {
          setPopupCell: je,
          select: Rn,
          onValueChange: Yo,
          size: te,
          selectedCell: fe,
          selectedEntityIds: ht,
          focused: qt
        },
        children: /* @__PURE__ */ E(B, { sx: (H) => ({
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: H.palette.background.paper
        }), children: [
          /* @__PURE__ */ n(
            RA,
            {
              forceFilter: j,
              filterIsSet: Cn,
              onTextSearch: g ? be : void 0,
              clearFilter: $,
              size: te,
              onSizeChanged: Y,
              title: c,
              actionsStart: s,
              actions: l,
              loading: x
            }
          ),
          /* @__PURE__ */ n(B, { sx: { flexGrow: 1 }, children: /* @__PURE__ */ n(
            BA,
            {
              data: b,
              columns: Da,
              cellRenderer: Qa,
              onRowClick: v ? void 0 : Fn,
              onEndReached: In,
              onResetPagination: Sn,
              error: k,
              paginationEnabled: W,
              onColumnResize: h,
              size: te,
              loading: x,
              filter: I,
              onFilterUpdate: Ta,
              sortBy: S,
              onSortByUpdate: D,
              hoverRow: m,
              checkFilterCombination: O
            }
          ) }),
          /* @__PURE__ */ n(
            cA,
            {
              open: Boolean(q),
              onClose: Qn,
              cellRect: q?.cellRect,
              columnIndex: q?.columnIndex,
              propertyKey: q?.propertyKey,
              collection: q?.collection,
              entity: q?.entity,
              tableKey: _.current,
              customFieldValidator: Tn,
              path: t,
              onCellValueChange: Yo
            },
            `popup_form_${q?.columnIndex}_${q?.entity?.id}`
          )
        ] })
      }
    );
  },
  Ae
), Yo = ({
  fullPath: e,
  collection: t,
  dataSource: r,
  context: i,
  value: a,
  propertyKey: o,
  onValueUpdated: s,
  setError: l,
  entity: c
}) => {
  const d = js({ ...c.values }, o, a), A = {
    path: e,
    entityId: c.id,
    values: d,
    previousValues: c.values,
    collection: t,
    status: "existing"
  };
  return Gi({
    ...A,
    callbacks: t.callbacks,
    dataSource: r,
    context: i,
    onSaveSuccess: () => s(),
    onSaveFailure: (u) => {
      console.error("Save failure"), console.error(u), l(u);
    }
  });
};
function TA(e, t) {
  const r = Object.keys(e.properties);
  e.additionalColumns && console.warn("`additionalColumns` is deprecated and will be removed in previous versions. Use `additionalFields` instead, with the same structure.");
  const i = e.additionalFields ?? e.additionalColumns ?? [], a = e.subcollections ?? [], o = [
    ...r,
    ...i.map((s) => s.id)
  ];
  if (t) {
    const s = a.map((l) => ga(l));
    o.push(...s.filter((l) => !o.includes(l)));
  }
  return ma(e, o);
}
function MA(e, t) {
  return ie(() => e.propertiesOrder ? ma(e, e.propertiesOrder) : TA(e, t), [e, t]);
}
function ma(e, t) {
  return t.flatMap((r) => {
    const i = e.properties[r];
    return i ? i.hideFromCollection ? [null] : i.disabled && typeof i.disabled == "object" && i.disabled.hidden ? [null] : i.dataType === "map" && i.spreadChildren && i.properties ? Object.keys(i.properties).map((o) => `${r}.${o}`) : [r] : e.additionalFields?.find((o) => o.id === r) ? [r] : [null];
  }).filter((r) => r !== null);
}
const ba = (e, t = !1) => {
  if (e.dataType === "number" || e.dataType === "string") {
    const r = e.name, i = e.enumValues ? xn(e.enumValues) : void 0;
    return {
      dataType: e.dataType,
      isArray: t,
      title: r,
      enumValues: i
    };
  } else {
    if (e.dataType === "array" && e.of)
      return Array.isArray(e.of) ? void 0 : ba(e.of, !0);
    if (e.dataType === "boolean") {
      const r = e.name;
      return {
        dataType: e.dataType,
        isArray: t,
        title: r
      };
    } else if (e.dataType === "date") {
      const r = e.name;
      return {
        dataType: e.dataType,
        isArray: t,
        title: r,
        dateMode: e.mode
      };
    }
  }
}, Vo = {
  enter: 225,
  exit: 175
}, PA = Q.forwardRef(function(t, r) {
  const {
    children: i,
    onClose: a,
    open: o,
    offsetPosition: s
  } = t, l = Be();
  return /* @__PURE__ */ n(
    Xa,
    {
      BackdropProps: {
        transitionDuration: Vo,
        sx: {
          backgroundColor: l.palette.mode === "dark" ? "rgba(0, 0, 0, 0.85)" : "rgba(0, 0, 0, 0.6)"
        }
      },
      BackdropComponent: Ka,
      open: o,
      onClose: a ? () => a(!1) : void 0,
      ref: r,
      keepMounted: !0,
      disableEnforceFocus: !0,
      disableEscapeKeyDown: !0,
      sx: {
        transition: `transform 300ms ${l.transitions.easing.easeOut}`,
        transform: `translateX(-${s * 200}px)`
      },
      children: /* @__PURE__ */ n(
        Ar,
        {
          in: o,
          timeout: Vo,
          direction: "left",
          children: /* @__PURE__ */ n(
            St,
            {
              variant: "outlined",
              square: !0,
              sx: {
                height: "100%",
                WebkitOverflowScrolling: "touch",
                position: "fixed",
                outline: 0,
                left: "auto",
                right: 0,
                overflow: "hidden",
                borderRadius: "16px 0 0 16px"
              },
              children: i
            }
          )
        }
      )
    }
  );
});
function $A(e, t) {
  const [r, i] = Q.useState(), { navigator: a } = Q.useContext(As), o = hr(), s = () => {
    i(void 0);
  }, l = () => {
    t(), i(void 0), o(-1);
  }, c = w(({ action: d, location: A, retry: u }) => {
    switch (d) {
      case "REPLACE": {
        u();
        return;
      }
      case "POP":
        i(A);
    }
  }, []);
  return Q.useEffect(() => {
    if (!e || r || !("block" in a))
      return;
    const d = a.block((A) => {
      const u = {
        ...A,
        retry() {
          d(), A.retry();
        }
      };
      c(u);
    });
    return d;
  }, [a, c, e, r]), { navigationWasBlocked: Boolean(r), handleCancel: s, handleOk: l };
}
function GA({
  open: e,
  handleOk: t,
  handleCancel: r,
  body: i,
  title: a
}) {
  return /* @__PURE__ */ E(
    jl,
    {
      keepMounted: !1,
      open: e,
      onClose: r,
      "aria-labelledby": "alert-dialog-title",
      "aria-describedby": "alert-dialog-description",
      children: [
        /* @__PURE__ */ n(Hl, { children: a ?? "Unsaved changes" }),
        /* @__PURE__ */ E(Nl, { children: [
          i && /* @__PURE__ */ n(ho, { children: i }),
          /* @__PURE__ */ n(ho, { children: "Are you sure you want to leave this page?" })
        ] }),
        /* @__PURE__ */ E(gt, { children: [
          /* @__PURE__ */ n(go, { onClick: r, autoFocus: !0, children: " Cancel " }),
          /* @__PURE__ */ n(go, { onClick: t, children: " Ok " })
        ] })
      ]
    }
  );
}
const wa = Q.createContext({
  width: "",
  blocked: !1,
  setBlocked: (e) => {
  },
  setBlockedNavigationMessage: (e) => {
  },
  close: () => {
  }
}), Yr = () => Ye(wa);
function OA() {
  const t = wn().sidePanels, r = [...t];
  return r.push(void 0), /* @__PURE__ */ n(Z, { children: r.map((i, a) => /* @__PURE__ */ n(
    LA,
    {
      panel: i,
      offsetPosition: t.length - a - 1
    },
    `side_dialog_${a}`
  )) });
}
function LA({
  offsetPosition: e,
  panel: t
}) {
  const [r, i] = M(!1), [a, o] = M(!1), [s, l] = M(), c = Q.useRef(t?.width), d = c.current, A = wn(), {
    navigationWasBlocked: u,
    handleOk: p,
    handleCancel: h
  } = $A(
    a && !r,
    () => o(!1)
  );
  z(() => {
    t && (c.current = t.width);
  }, [t]);
  const f = () => {
    o(!1), i(!1), A.close(), t?.onClose?.();
  }, g = () => {
    i(!1);
  }, m = (v) => {
    a && !v ? i(!0) : (A.close(), t?.onClose?.());
  };
  return /* @__PURE__ */ E(
    wa.Provider,
    {
      value: {
        blocked: a,
        setBlocked: o,
        setBlockedNavigationMessage: l,
        width: d,
        close: m
      },
      children: [
        /* @__PURE__ */ E(
          PA,
          {
            open: Boolean(t),
            onClose: m,
            offsetPosition: e,
            children: [
              t && /* @__PURE__ */ n(
                B,
                {
                  sx: {
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    transition: "width 250ms ease-in-out",
                    width: t.width,
                    maxWidth: "100vw"
                  },
                  children: /* @__PURE__ */ n(ue, { children: t.component })
                }
              ),
              !t && /* @__PURE__ */ n("div", { style: { width: d } })
            ]
          }
        ),
        /* @__PURE__ */ n(
          GA,
          {
            open: u || r,
            handleOk: r ? f : p,
            handleCancel: r ? g : h,
            body: s
          }
        )
      ]
    }
  );
}
function YA({
  entityOrEntitiesToDelete: e,
  collection: t,
  onClose: r,
  open: i,
  callbacks: a,
  onEntityDelete: o,
  onMultipleEntitiesDelete: s,
  path: l,
  ...c
}) {
  const d = Ve(), A = rt(), [u, p] = M(!1), [h, f] = Q.useState(), [g, m] = Q.useState(), v = re();
  Q.useEffect(() => {
    if (e) {
      const $ = Array.isArray(e) && e.length === 1 ? e[0] : e;
      f($), m(Array.isArray($));
    }
  }, [e]);
  const b = ie(() => ke({
    collection: t,
    path: l,
    fields: v.fields
  }), [t, l]), x = w(() => {
    r();
  }, [r]), y = w(($) => {
    console.debug("Deleted", $);
  }, []), k = w(($, L) => {
    A.open({
      type: "error",
      message: "Error deleting: " + L?.message
    }), console.error("Error deleting entity"), console.error(L);
  }, [b.name]), I = w(($, L) => {
    A.open({
      type: "error",
      message: "Error before deleting: " + L?.message
    }), console.error(L);
  }, [b.name]), C = w(($, L) => {
    A.open({
      type: "error",
      message: "Error after deleting: " + L?.message
    }), console.error(L);
  }, [b.name]), S = w(($) => ac({
    dataSource: d,
    entity: $,
    collection: b,
    callbacks: a,
    onDeleteSuccess: y,
    onDeleteFailure: k,
    onPreDeleteHookError: I,
    onDeleteSuccessHookError: C,
    context: v
  }), [d, b, a, y, k, I, C, v]), D = w(async () => {
    h && (p(!0), g ? Promise.all(h.map(S)).then(($) => {
      p(!1), s && h && s(l, h), $.every(Boolean) ? A.open({
        type: "success",
        message: `${b.name}: multiple deleted`
      }) : $.some(Boolean) ? A.open({
        type: "warning",
        message: `${b.name}: Some of the entities have been deleted, but not all`
      }) : A.open({
        type: "error",
        message: `${b.name}: Error deleting entities`
      }), r();
    }) : S(h).then(($) => {
      p(!1), $ && (o && h && o(l, h), A.open({
        type: "success",
        message: `${b.singularName ?? b.name} deleted`
      }), r());
    }));
  }, [h, g, S, s, l, r, A, b.name, o]);
  let P;
  if (h && g)
    P = /* @__PURE__ */ n("div", { children: "Multiple entities" });
  else {
    const $ = h;
    P = $ ? /* @__PURE__ */ n(
      ua,
      {
        entity: $,
        collection: t,
        path: l
      }
    ) : /* @__PURE__ */ n(Z, {});
  }
  const R = g ? `${b.name}: Confirm multiple delete?` : `Would you like to delete this ${b.name}?`;
  return /* @__PURE__ */ E(
    ur,
    {
      maxWidth: "md",
      "aria-labelledby": "delete-dialog",
      open: i,
      onBackdropClick: r,
      ...c,
      children: [
        /* @__PURE__ */ n(fr, { id: "delete-dialog-title", children: R }),
        !g && /* @__PURE__ */ n(gr, { dividers: !0, children: P }),
        /* @__PURE__ */ E(gt, { children: [
          u && /* @__PURE__ */ n(dt, { size: 16, thickness: 8 }),
          /* @__PURE__ */ n(
            ae,
            {
              onClick: x,
              disabled: u,
              color: "primary",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ n(
            ae,
            {
              autoFocus: !0,
              disabled: u,
              onClick: D,
              variant: "contained",
              color: "primary",
              children: "Ok"
            }
          )
        ] })
      ]
    }
  );
}
function VA(e, t, r, i, a) {
  const o = r.properties, s = zA(o, i, a), l = WA(e, t, o, s), c = Wo(s.map((A) => A.label)), d = l.map((A) => Wo(A));
  UA([c, ...d], `${r.name}.csv`, "text/csv");
}
function WA(e, t, r, i) {
  const a = e.map((o) => ({ id: o.id, ...ya(o.values, r) }));
  return t && t.forEach((o, s) => {
    a[s] = { ...a[s], ...o };
  }), a && a.map((o) => i.map((s) => Bt(o, s.key)));
}
function zA(e, t, r) {
  const i = [
    { label: "id", key: "id" },
    ...Object.entries(e).map(([a, o]) => va(o, a, "")).flat()
  ];
  return r?.additionalFields && i.push(...r.additionalFields.map((a) => ({
    label: a.key,
    key: a.key
  }))), i;
}
function va(e, t, r = "") {
  const i = r ? `${r}.${t}` : t;
  return e.dataType === "map" && e.properties ? Object.entries(e.properties).map(([a, o]) => va(o, a, i)).flat() : [{ label: i, key: i }];
}
function sr(e, t) {
  let r;
  if (t.dataType === "map" && t.properties)
    r = ya(e, t.properties);
  else if (t.dataType === "array")
    t.of && Array.isArray(e) ? Array.isArray(t.of) ? r = t.of.map((i, a) => sr(e[a], i)) : t.of.dataType === "map" ? r = e.map((i) => JSON.stringify(i)) : r = e.map((i) => sr(i, t.of)) : r = e;
  else if (t.dataType === "reference") {
    const i = e || void 0;
    r = i ? i.pathWithId : null;
  } else
    t.dataType === "date" ? r = e ? e.getTime() : null : r = e;
  return r;
}
function ya(e, t) {
  const r = Object.entries(t).map(([i, a]) => {
    const o = e && e[i], s = sr(o, a);
    return s === void 0 ? {} : { [i]: s };
  }).reduce((i, a) => ({ ...i, ...a }), {});
  return { ...e, ...r };
}
function Wo(e) {
  return e.map((t) => t == null ? "" : '"' + String(t).replaceAll('"', '""') + '"').join(",") + `\r
`;
}
function UA(e, t, r) {
  const i = new Blob(e, { type: r }), a = URL.createObjectURL(i), o = document.createElement("a");
  o.href = a, o.setAttribute("download", t), o.click();
}
const Un = 200;
function jA({
  collection: e,
  path: t,
  exportConfig: r
}) {
  const i = re(), a = Ve(), s = Ie().resolveAliasesFrom(t), l = Q.useMemo(() => ke({
    collection: e,
    path: s,
    fields: i.fields
  }), [e, s]), c = he(), d = he(), [A, u] = Q.useState(!1), [p, h] = Q.useState(), [f, g] = Q.useState(!1), [m, v] = Q.useState(!1), [b, x] = Q.useState(!1), y = w(() => {
    x(!0);
  }, [x]), k = w(() => {
    x(!1);
  }, [x]), I = w((R, $, L, K, V) => {
    if (!R)
      throw Error("Trying to perform export without loading data first");
    VA(R, $, L, K, V);
  }, []), C = w(async (R) => {
    if (!r?.additionalFields)
      return;
    const $ = r.additionalFields;
    return await Promise.all(R.map(async (K) => (await Promise.all($.map(async (V) => ({
      [V.key]: await V.builder({
        entity: K,
        context: i
      })
    })))).reduce((V, W) => ({ ...V, ...W }), {})));
  }, [r?.additionalFields]), S = w(async (R) => {
    R.length >= Un && g(!0);
    const $ = c.current && R.length > c.current.length && m;
    c.current = R;
    const L = await C(R);
    d.current = L, h(void 0), $ && (I(R, L, l, s, r), k());
  }, [l, I, r, C, m, k, s]);
  z(() => {
    b && (u(!0), a.fetchCollection({
      path: s,
      collection: l,
      limit: m ? void 0 : Un
    }).then(S).catch(h).finally(() => u(!1)));
  }, [l, a, m, b, s, S]);
  const D = f && !m, P = w(() => {
    D ? v(!0) : (I(c.current, d.current, l, s, r), k());
  }, [D, I, l, s, r, k]);
  return /* @__PURE__ */ E(Z, { children: [
    /* @__PURE__ */ n(de, { title: "Export", children: /* @__PURE__ */ n(ne, { color: "primary", onClick: y, children: /* @__PURE__ */ n($l, {}) }) }),
    /* @__PURE__ */ E(
      ur,
      {
        keepMounted: !1,
        open: b,
        onClose: k,
        children: [
          /* @__PURE__ */ n(fr, { children: "Export data" }),
          /* @__PURE__ */ n(gr, { children: /* @__PURE__ */ E(ni, { children: [
            /* @__PURE__ */ n("div", { children: "Download the the content of this table as a CSV" }),
            /* @__PURE__ */ n("br", {}),
            D && /* @__PURE__ */ E(
              es,
              {
                elevation: 1,
                variant: "filled",
                severity: "warning",
                children: [
                  /* @__PURE__ */ E("div", { children: [
                    "This collections has a large number of documents (more than ",
                    Un,
                    ")."
                  ] }),
                  /* @__PURE__ */ n("div", { children: "Would you like to proceed?" })
                ]
              }
            )
          ] }) }),
          /* @__PURE__ */ E(gt, { children: [
            A && /* @__PURE__ */ n(dt, { size: 16, thickness: 8 }),
            /* @__PURE__ */ n(ae, { color: "primary", onClick: k, children: "Cancel" }),
            /* @__PURE__ */ n(
              ae,
              {
                color: "primary",
                variant: "contained",
                disabled: A,
                onClick: P,
                children: "Download"
              }
            )
          ] })
        ]
      }
    )
  ] });
}
function NA({
  collection: e,
  onNewClick: t,
  exportable: r,
  onMultipleDeleteClick: i,
  selectionEnabled: a,
  path: o,
  selectionController: s,
  loadedEntities: l
}) {
  const c = re(), d = Ft(), A = Be(), u = Oe(A.breakpoints.up("md")), p = s.selectedEntities, h = Or(e, d, tt(o), null) && t && (u ? /* @__PURE__ */ E(
    ae,
    {
      onClick: t,
      startIcon: /* @__PURE__ */ n(ln, {}),
      size: "large",
      variant: "contained",
      color: "primary",
      children: [
        "Add ",
        e.singularName ?? e.name
      ]
    }
  ) : /* @__PURE__ */ n(
    ae,
    {
      onClick: t,
      size: "medium",
      variant: "contained",
      color: "primary",
      children: /* @__PURE__ */ n(ln, {})
    }
  )), f = da(e, d, tt(o), null);
  let g;
  if (a) {
    const x = u ? /* @__PURE__ */ E(
      ae,
      {
        disabled: !p?.length || !f,
        startIcon: /* @__PURE__ */ n(Jn, {}),
        onClick: i,
        color: "primary",
        sx: { minWidth: 68 },
        children: [
          "(",
          p?.length,
          ")"
        ]
      }
    ) : /* @__PURE__ */ n(
      ne,
      {
        color: "primary",
        disabled: !p?.length || !f,
        onClick: i,
        size: "large",
        children: /* @__PURE__ */ n(Jn, {})
      }
    );
    g = /* @__PURE__ */ n(
      de,
      {
        title: f ? "Delete" : "You have selected at least one entity you cannot delete",
        children: /* @__PURE__ */ n("span", { children: x })
      }
    );
  }
  const m = {
    path: o,
    collection: e,
    selectionController: s,
    context: c,
    loadedEntities: l
  }, v = e.Actions ? Array.isArray(e.Actions) ? /* @__PURE__ */ n(Z, { children: e.Actions.map((x, y) => /* @__PURE__ */ n(x, { ...m }, `actions_${y}`)) }) : /* @__PURE__ */ n(e.Actions, { ...m }) : void 0, b = r && /* @__PURE__ */ n(
    jA,
    {
      collection: e,
      exportConfig: typeof e.exportable == "object" ? e.exportable : void 0,
      path: o
    }
  );
  return /* @__PURE__ */ E(Z, { children: [
    v,
    g,
    b,
    h
  ] });
}
function HA({
  data: e,
  entitiesDisplayedFirst: t
}) {
  if (!t)
    return e;
  const r = new Set(t.map((i) => i.id));
  return [...t, ...e.filter((i) => !r.has(i.id))];
}
function _A(e, t, r = 5e3) {
  const [i, a] = Q.useState(e), o = Q.useRef(i.length ?? 0), s = Q.useRef(!1), l = Q.useRef(t), c = !Ae(l.current, t), d = e.length >= o.current || c;
  return Q.useEffect(() => {
    const A = () => {
      Ae(i, e) || (l.current = t, o.current = e.length, a(e)), s.current = !1;
    };
    s.current = !0;
    let u;
    return d ? A() : u = setTimeout(A, r), () => {
      clearTimeout(u), s.current && d && A();
    };
  }, [e, r, t, d]), d ? e : i;
}
const JA = 50;
function xa({
  fullPath: e,
  collection: t,
  entitiesDisplayedFirst: r,
  isFilterCombinationValid: i
}) {
  const {
    filterCombinations: a,
    initialFilter: o,
    initialSort: s,
    forceFilter: l
  } = t, c = t.pagination === void 0 || Boolean(t.pagination), d = typeof t.pagination == "number" ? t.pagination : JA, [A, u] = Q.useState(), [p, h] = Q.useState(c ? d : void 0), f = w((R, $) => i(R, $, a), [a]), g = ie(() => {
    if (s && l && !f(l, s)) {
      console.warn("Initial sort is not compatible with the force filter. Ignoring initial sort");
      return;
    }
    return s;
  }, [s, l]), [m, v] = Q.useState(l ?? o ?? void 0), [b, x] = Q.useState(g), y = w(() => v(l ?? void 0), [l]), {
    data: k,
    dataLoading: I,
    noMoreToLoad: C,
    dataLoadingError: S
  } = ic({
    path: e,
    collection: t,
    filterValues: m,
    sortBy: b,
    searchString: A,
    itemCount: p
  }), D = HA({
    data: k,
    entitiesDisplayedFirst: r
  });
  return {
    data: _A(D, {
      filterValues: m,
      sortBy: b,
      searchString: A
    }),
    dataLoading: I,
    noMoreToLoad: C,
    dataLoadingError: S,
    filterValues: m,
    setFilterValues: v,
    sortBy: b,
    setSortBy: x,
    searchString: A,
    setSearchString: u,
    clearFilter: y,
    itemCount: p,
    setItemCount: h,
    paginationEnabled: c,
    pageSize: d,
    checkFilterCombination: f
  };
}
function Ea(e, t, r) {
  const i = t ? t[0] : void 0, a = t ? t[1] : void 0, o = Object.values(e);
  if (i && o.map((c) => c[0]).includes("=="))
    return !1;
  const s = Object.keys(e), l = s.length;
  return l === 1 && (!i || i === s[0]) ? !0 : !r && l > 1 ? !1 : !!r && r.filter((c) => !i || i in c).find(
    (c) => Object.entries(e).every(([d, A]) => c[d] !== void 0 && (!a || c[d] === a))
  ) !== void 0;
}
const Ba = Q.memo(
  function({
    fullPath: t,
    isSubCollection: r,
    ...i
  }) {
    const a = At(), o = Ft(), s = Pi(), l = re(), c = ie(() => {
      const T = s?.getCollectionConfig(t);
      return T ? Ze(i, T) : i;
    }, [i, t, s]), d = Be(), [A, u] = M(void 0), [p, h] = Q.useState(void 0), f = w(() => {
      const T = A;
      setTimeout(() => {
        T === A && u(void 0);
      }, 2400);
    }, [A]), g = w((T) => ca(c, o, tt(t), T ?? null) ? c.inlineEditing === void 0 || c.inlineEditing : !1, [c, o, t]), m = c.exportable === void 0 || c.exportable, v = c.selectionEnabled === void 0 || c.selectionEnabled, b = !g(), [x, y] = Q.useState(null), k = Ca(), I = c.selectionController ?? k, {
      selectedEntities: C,
      toggleEntitySelection: S,
      isEntitySelected: D,
      setSelectedEntities: P
    } = I;
    z(() => {
      h(void 0);
    }, [C]);
    const R = xa({
      fullPath: t,
      collection: c,
      entitiesDisplayedFirst: [],
      isFilterCombinationValid: Ea
    }), $ = w((T) => (u(T), l.onAnalyticsEvent?.("edit_entity_clicked", {
      path: T.path,
      entityId: T.id
    }), a.open({
      entityId: T.id,
      path: t,
      collection: c,
      updateUrl: !0,
      onClose: f
    })), [t, c, a]), L = w(() => {
      l.onAnalyticsEvent?.("new_entity_click", {
        path: t
      }), a.open({
        path: t,
        collection: c,
        updateUrl: !0,
        onClose: f
      });
    }, [t, c, a]), K = w((T) => {
      l.onAnalyticsEvent?.("single_delete_dialog_open", {
        path: t
      }), h(T);
    }, [l, t]), V = w(() => {
      l.onAnalyticsEvent?.("multiple_delete_dialog_open", {
        path: t
      }), h(C);
    }, [l, t, C]), W = w((T, te) => {
      l.onAnalyticsEvent?.("single_entity_deleted", {
        path: t
      }), P((me) => me.filter((fe) => fe.id !== te.id));
    }, [l, t, P]), O = w((T, te) => {
      l.onAnalyticsEvent?.("multiple_entities_deleted", {
        path: t
      }), P([]), h(void 0);
    }, [P]), F = w((T, te) => {
      if (s) {
        const me = s.getCollectionConfig(T), fe = Ze(me, te);
        s.onCollectionModified(T, fe);
      }
    }, [s]), G = w(({
      width: T,
      key: te
    }) => {
      if (!c.properties[te])
        return;
      const me = { columnWidth: T }, fe = { properties: { [te]: me } };
      F(t, fe);
    }, [c, F, t]), U = w((T) => {
      s && F(t, { defaultSize: T });
    }, [F, t, s]), j = x != null, se = ie(() => /* @__PURE__ */ n(B, { sx: {
      display: "flex",
      flexDirection: "row",
      contain: "content",
      "& > *:not(:last-child)": {
        [d.breakpoints.down("md")]: {
          mr: d.spacing(1)
        },
        mr: d.spacing(2)
      }
    }, children: /* @__PURE__ */ E(B, { children: [
      /* @__PURE__ */ n(
        X,
        {
          variant: "h6",
          sx: {
            lineHeight: "1.15",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            maxWidth: "164px",
            cursor: c.description ? "pointer" : "inherit"
          },
          onClick: c.description ? (T) => {
            y(T.currentTarget), T.stopPropagation();
          } : void 0,
          children: `${c.name}`
        }
      ),
      /* @__PURE__ */ n(ZA, { fullPath: t }),
      c.description && /* @__PURE__ */ n(
        ei,
        {
          id: "info-dialog",
          open: j,
          anchorEl: x,
          elevation: 1,
          onClose: () => {
            y(null);
          },
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center"
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "center"
          },
          children: /* @__PURE__ */ n(B, { m: 2, children: /* @__PURE__ */ n(Qr, { source: c.description }) })
        }
      )
    ] }) }), [d, c.description, c.name, t, j, x]), _ = Or(c, o, tt(t), null), J = w((T) => {
      u(T), l.onAnalyticsEvent?.("copy_entity_click", {
        path: T.path,
        entityId: T.id
      }), a.open({
        entityId: T.id,
        path: t,
        copy: !0,
        collection: c,
        updateUrl: !0,
        onClose: f
      });
    }, [a, c, t, f]), N = w((T) => {
      u(T), l.onAnalyticsEvent?.("entity_click", {
        path: T.path,
        entityId: T.id
      }), a.open({
        entityId: T.id,
        path: t,
        collection: c,
        updateUrl: !0,
        onClose: f
      });
    }, [a, c, t, f]), ee = w(({
      entity: T,
      size: te,
      width: me,
      frozen: fe
    }) => {
      const ge = D(T), q = da(c, o, tt(t), T);
      return /* @__PURE__ */ n(
        Lr,
        {
          entity: T,
          width: me,
          frozen: fe,
          isSelected: ge,
          selectionEnabled: v,
          size: te,
          toggleEntitySelection: S,
          onEditClicked: N,
          onCopyClicked: _ ? J : void 0,
          onDeleteClicked: q ? K : void 0
        }
      );
    }, [D, c, o, t, v, S, N, _, J]);
    return /* @__PURE__ */ E(B, { sx: {
      overflow: "hidden",
      height: "100%",
      width: "100%"
    }, children: [
      /* @__PURE__ */ n(
        pa,
        {
          fullPath: t,
          tableController: R,
          onSizeChanged: U,
          onEntityClick: $,
          onColumnResize: G,
          tableRowActionsBuilder: ee,
          title: se,
          selectionController: I,
          highlightedEntities: A ? [A] : [],
          ...c,
          actions: /* @__PURE__ */ n(
            NA,
            {
              collection: c,
              exportable: m,
              onMultipleDeleteClick: V,
              onNewClick: L,
              path: t,
              loadedEntities: R.data,
              selectionController: k,
              selectionEnabled: v
            }
          ),
          hoverRow: b,
          inlineEditing: g()
        },
        `collection_table_${t}`
      ),
      p && /* @__PURE__ */ n(
        YA,
        {
          entityOrEntitiesToDelete: p,
          path: t,
          collection: c,
          callbacks: c.callbacks,
          open: Boolean(p),
          onEntityDelete: W,
          onMultipleEntitiesDelete: O,
          onClose: () => h(void 0)
        }
      )
    ] });
  },
  Ae
);
function Ca() {
  const [e, t] = M([]), r = w((a) => {
    let o;
    e.map((s) => s.id).includes(a.id) ? o = e.filter((s) => s.id !== a.id) : o = [...e, a], t(o);
  }, [e]), i = w((a) => e.map((o) => o.id).includes(a.id), [e]);
  return {
    selectedEntities: e,
    setSelectedEntities: t,
    isEntitySelected: i,
    toggleEntitySelection: r
  };
}
function ZA({ fullPath: e }) {
  const t = Ve(), r = Ie(), [i, a] = M(void 0), [o, s] = M(void 0);
  return z(() => {
    t.countEntities(r.resolveAliasesFrom(e)).then(a).catch(s);
  }, [e, t, r]), o ? null : /* @__PURE__ */ n(
    X,
    {
      sx: {
        display: "block",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        maxWidth: "160px",
        textAlign: "left"
      },
      variant: "caption",
      color: "textSecondary",
      children: i !== void 0 ? `${i} entities` : _e()
    }
  );
}
function qA({
  onSingleEntitySelected: e,
  onMultipleEntitiesSelected: t,
  onClose: r,
  multiselect: i,
  collection: a,
  path: o,
  selectedEntityIds: s,
  forceFilter: l
}) {
  const c = Yr(), d = At(), A = Ie(), u = re(), p = A.resolveAliasesFrom(o), h = Ve(), [f, g] = M([]), m = Ca();
  z(() => {
    let S = !1;
    return s && a ? Promise.all(
      s.map((D) => h.fetchEntity({
        path: p,
        entityId: D,
        collection: a
      }))
    ).then((D) => {
      if (!S) {
        const P = D.filter((R) => R !== void 0);
        m.setSelectedEntities(P), g(P);
      }
    }) : (m.setSelectedEntities([]), g([])), () => {
      S = !0;
    };
  }, [h, p, s, a, m.setSelectedEntities]);
  const v = w(() => {
    u.onAnalyticsEvent?.("reference_selection_clear", {
      path: p
    }), m.setSelectedEntities([]), !i && e ? e(null) : t && t([]);
  }, [i, t, e]), b = w((S) => {
    let D;
    const P = m.selectedEntities;
    u.onAnalyticsEvent?.("reference_selection_toggle", {
      path: p,
      entityId: S.id
    }), P && (P.map((R) => R.id).indexOf(S.id) > -1 ? D = P.filter((R) => R.id !== S.id) : D = [...P, S], m.setSelectedEntities(D), t && t(D));
  }, [t, m.selectedEntities]), x = w((S) => {
    !i && e ? (u.onAnalyticsEvent?.("reference_selected_single", {
      path: p,
      entityId: S.id
    }), e(S), c.close(!1)) : b(S);
  }, [c, i, e, b]), y = w(
    () => {
      u.onAnalyticsEvent?.("reference_selection_new_entity", {
        path: p
      }), d.open({
        path: p,
        collection: a,
        updateUrl: !0,
        onUpdate: ({ entity: S }) => {
          g([S, ...f]), x(S);
        },
        closeOnSave: !0
      });
    },
    [d, p, a, f, x]
  ), k = w(({
    entity: S,
    size: D,
    width: P,
    frozen: R
  }) => {
    const $ = m.selectedEntities, L = $ && $.map((K) => K.id).indexOf(S.id) > -1;
    return /* @__PURE__ */ n(
      Lr,
      {
        width: P,
        frozen: R,
        entity: S,
        size: D,
        isSelected: L,
        selectionEnabled: i,
        toggleEntitySelection: b
      }
    );
  }, [i, m.selectedEntities, b]), I = w((S) => {
    S.stopPropagation(), c.close(!1), r && r();
  }, [r, c]);
  if (!a)
    return /* @__PURE__ */ n(
      xe,
      {
        error: "Could not find collection with id " + a
      }
    );
  const C = xa({
    fullPath: p,
    collection: a,
    entitiesDisplayedFirst: f,
    isFilterCombinationValid: Ea
  });
  return /* @__PURE__ */ E(B, { sx: {
    display: "flex",
    flexDirection: "column",
    height: "100%"
  }, children: [
    /* @__PURE__ */ n(B, { sx: { flexGrow: 1 }, children: f && /* @__PURE__ */ n(
      pa,
      {
        fullPath: p,
        onEntityClick: x,
        forceFilter: l,
        tableController: C,
        tableRowActionsBuilder: k,
        title: /* @__PURE__ */ n(X, { variant: "h6", children: a.singularName ? `Select ${a.singularName}` : `Select from ${a.name}` }),
        ...a,
        inlineEditing: !1,
        selectionController: m,
        actions: /* @__PURE__ */ n(
          XA,
          {
            collection: a,
            path: p,
            onNewClick: y,
            onClear: v
          }
        )
      }
    ) }),
    /* @__PURE__ */ n(gt, { translucent: !1, children: /* @__PURE__ */ n(
      ae,
      {
        onClick: I,
        color: "primary",
        variant: "outlined",
        children: "Done"
      }
    ) })
  ] });
}
function XA({
  collection: e,
  path: t,
  onClear: r,
  onNewClick: i
}) {
  const a = Ft(), o = Be(), s = Oe(o.breakpoints.up("md")), l = Or(e, a, tt(t), null) && i && (s ? /* @__PURE__ */ E(
    ae,
    {
      onClick: i,
      startIcon: /* @__PURE__ */ n(ln, {}),
      size: "large",
      variant: "contained",
      color: "primary",
      children: [
        "Add ",
        e.singularName ?? e.name
      ]
    }
  ) : /* @__PURE__ */ n(
    ae,
    {
      onClick: i,
      size: "medium",
      variant: "contained",
      color: "primary",
      children: /* @__PURE__ */ n(ln, {})
    }
  ));
  return /* @__PURE__ */ E(Z, { children: [
    /* @__PURE__ */ n(
      ae,
      {
        onClick: r,
        color: "primary",
        children: "Clear"
      }
    ),
    l
  ] });
}
function lr(e) {
  return Array.isArray(e) ? e : e ? [e] : [];
}
function zo({
  children: e,
  group: t
}) {
  return /* @__PURE__ */ E(B, { mt: 6, mb: 6, children: [
    /* @__PURE__ */ n(
      X,
      {
        color: "textSecondary",
        className: "weight-500",
        children: t?.toUpperCase() ?? "Ungrouped views".toUpperCase()
      }
    ),
    /* @__PURE__ */ n(jt, {}),
    /* @__PURE__ */ n(B, { mt: 2, children: e })
  ] });
}
function KA({
  view: e,
  path: t,
  collection: r,
  url: i,
  name: a,
  description: o,
  onClick: s
}) {
  const l = or(r ?? e), c = hr(), d = re();
  let A;
  if (d.plugins && r) {
    const u = {
      path: t,
      collection: r,
      context: d
    };
    A = /* @__PURE__ */ n(Z, { children: d.plugins.map((p, h) => p.homePage?.CollectionActions ? /* @__PURE__ */ n(
      p.homePage.CollectionActions,
      {
        ...u
      },
      `actions_${h}`
    ) : null) });
  }
  return /* @__PURE__ */ n(St, { variant: "outlined", children: /* @__PURE__ */ E(
    ts,
    {
      component: "div",
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        minHeight: 248
      },
      onClick: () => {
        s?.(), c(i);
      },
      children: [
        /* @__PURE__ */ E(
          ns,
          {
            sx: {
              flexGrow: 1,
              width: "100%"
            },
            children: [
              /* @__PURE__ */ E(B, { sx: {
                height: 40,
                display: "flex",
                alignItems: "center",
                width: "100%",
                justifyContent: "space-between"
              }, children: [
                /* @__PURE__ */ n(l, { color: "disabled" }),
                /* @__PURE__ */ n("div", { onClick: (u) => {
                  u.preventDefault(), u.stopPropagation();
                }, children: A })
              ] }),
              /* @__PURE__ */ n(
                X,
                {
                  gutterBottom: !0,
                  variant: "h5",
                  component: "h2",
                  children: a
                }
              ),
              o && /* @__PURE__ */ n(
                X,
                {
                  variant: "body2",
                  color: "textSecondary",
                  component: "div",
                  children: /* @__PURE__ */ n(Qr, { source: o })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ n(rs, { style: { alignSelf: "flex-end" }, children: /* @__PURE__ */ n(B, { p: 1, children: /* @__PURE__ */ n(Bl, { color: "primary" }) }) })
      ]
    }
  ) });
}
function eu({ additionalChildren: e }) {
  const t = re(), r = Ie();
  if (!r.topLevelNavigation)
    throw Error("Navigation not ready in FireCMSHomePage");
  const {
    navigationEntries: i,
    groups: a
  } = r.topLevelNavigation, o = [...a];
  (i.filter((l) => !l.group).length > 0 || i.length === 0) && o.push(void 0);
  let s;
  if (t.plugins) {
    const l = {
      context: t
    };
    s = /* @__PURE__ */ n(Z, { children: t.plugins.filter((c) => c.homePage?.includeSection).map((c, d) => {
      const A = c.homePage.includeSection(l);
      return /* @__PURE__ */ n(
        zo,
        {
          group: A.title,
          children: A.children
        },
        `plugin_section_${c.name}`
      );
    }) });
  }
  return /* @__PURE__ */ E(Ko, { children: [
    o.map((l, c) => {
      const d = [], A = {
        group: l,
        context: t
      };
      return t.plugins && t.plugins.forEach((u) => {
        u.homePage?.AdditionalCards && d.push(...lr(u.homePage?.AdditionalCards));
      }), /* @__PURE__ */ n(
        zo,
        {
          group: l,
          children: /* @__PURE__ */ E(oe, { container: !0, spacing: 2, children: [
            i.filter((u) => u.group === l || !u.group && l === void 0).map((u) => /* @__PURE__ */ n(
              oe,
              {
                item: !0,
                xs: 12,
                sm: 6,
                lg: 4,
                children: /* @__PURE__ */ n(
                  KA,
                  {
                    ...u,
                    onClick: () => {
                      const p = u.type === "collection" ? "home_navigate_to_collection" : u.type === "view" ? "home_navigate_to_view" : "unmapped_event";
                      t.onAnalyticsEvent?.(p, { path: u.path });
                    }
                  }
                )
              },
              `nav_${u.group}_${u.name}`
            )),
            d && d.map((u, p) => /* @__PURE__ */ n(
              oe,
              {
                item: !0,
                xs: 12,
                sm: 6,
                lg: 4,
                children: /* @__PURE__ */ n(u, { ...A })
              },
              `nav_${l}_"add_${p}`
            ))
          ] })
        },
        `plugin_section_${l}`
      );
    }),
    s,
    e
  ] });
}
function Jg({
  children: e,
  title: t,
  path: r
}) {
  const i = Ir();
  return Q.useEffect(() => {
    i.set({
      breadcrumbs: [{
        title: t,
        url: r
      }]
    });
  }, [r, t]), /* @__PURE__ */ n(Z, { children: e });
}
function tu() {
  return /* @__PURE__ */ n(
    B,
    {
      display: "flex",
      width: "100%",
      height: "100%",
      children: /* @__PURE__ */ E(
        B,
        {
          m: "auto",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          children: [
            /* @__PURE__ */ n(X, { variant: "h4", align: "center", gutterBottom: !0, children: "Page not found" }),
            /* @__PURE__ */ n(X, { align: "center", gutterBottom: !0, children: "This page does not exist or you may not have access to it" }),
            /* @__PURE__ */ n(
              ae,
              {
                component: Hn,
                to: "/",
                children: "Back to home"
              }
            )
          ]
        }
      )
    }
  );
}
function Zg({
  open: e,
  onAccept: t,
  onCancel: r,
  title: i,
  loading: a,
  body: o
}) {
  return /* @__PURE__ */ E(
    ur,
    {
      open: e,
      onClose: r,
      children: [
        /* @__PURE__ */ n(fr, { children: i }),
        o && /* @__PURE__ */ n(gr, { children: /* @__PURE__ */ n(ni, { children: o }) }),
        /* @__PURE__ */ E(gt, { children: [
          /* @__PURE__ */ n(
            ae,
            {
              onClick: r,
              autoFocus: !0,
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ n(
            Fl,
            {
              variant: "contained",
              color: "primary",
              type: "submit",
              loading: a,
              onClick: t,
              children: "Ok"
            }
          )
        ] })
      ]
    }
  );
}
function ka({
  width: e,
  height: t,
  style: r
}) {
  return /* @__PURE__ */ E(
    "svg",
    {
      width: e ?? "100%",
      height: t ?? "100%",
      viewBox: "0 0 599 599",
      version: "1.1",
      style: r,
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ E("defs", { children: [
          /* @__PURE__ */ E(
            "radialGradient",
            {
              cx: "28.6213569%",
              cy: "43.1133328%",
              fx: "28.6213569%",
              fy: "43.1133328%",
              r: "71.5003456%",
              gradientTransform: "translate(0.286214,0.431133),rotate(3.343450),scale(1.000000,0.996175),translate(-0.286214,-0.431133)",
              id: "radialGradient-1",
              children: [
                /* @__PURE__ */ n("stop", { stopColor: "#FF5B79", offset: "0%" }),
                /* @__PURE__ */ n("stop", { stopColor: "#FA5574", offset: "28.0930803%" }),
                /* @__PURE__ */ n("stop", { stopColor: "#EC4C51", offset: "44.7242531%" }),
                /* @__PURE__ */ n("stop", { stopColor: "#9543C1", offset: "71.4578165%" }),
                /* @__PURE__ */ n("stop", { stopColor: "#3857B3", offset: "100%" })
              ]
            }
          ),
          /* @__PURE__ */ E(
            "radialGradient",
            {
              cx: "53.6205516%",
              cy: "47.2473036%",
              fx: "53.6205516%",
              fy: "47.2473036%",
              r: "50.8229649%",
              gradientTransform: "translate(0.536206,0.472473),rotate(90.000000),scale(1.000000,1.206631),translate(-0.536206,-0.472473)",
              id: "radialGradient-2",
              children: [
                /* @__PURE__ */ n("stop", { stopColor: "#68294F", stopOpacity: "0", offset: "0%" }),
                /* @__PURE__ */ n(
                  "stop",
                  {
                    stopColor: "#5E2548",
                    stopOpacity: "0.04641108",
                    offset: "75.3503173%"
                  }
                ),
                /* @__PURE__ */ n(
                  "stop",
                  {
                    stopColor: "#0D060B",
                    stopOpacity: "0.437431709",
                    offset: "100%"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ E(
            "radialGradient",
            {
              cx: "53.8605015%",
              cy: "48.1990423%",
              fx: "53.8605015%",
              fy: "48.1990423%",
              r: "59.9151549%",
              gradientTransform: "translate(0.538605,0.481990),rotate(180.000000),scale(1.000000,0.925027),translate(-0.538605,-0.481990)",
              id: "radialGradient-3",
              children: [
                /* @__PURE__ */ n("stop", { stopColor: "#68294F", stopOpacity: "0", offset: "0%" }),
                /* @__PURE__ */ n(
                  "stop",
                  {
                    stopColor: "#5E2548",
                    stopOpacity: "0.04641108",
                    offset: "84.0867343%"
                  }
                ),
                /* @__PURE__ */ n(
                  "stop",
                  {
                    stopColor: "#FF0000",
                    stopOpacity: "0.567324765",
                    offset: "100%"
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ n(
          "g",
          {
            id: "Page-1",
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd",
            children: /* @__PURE__ */ E("g", { id: "firecms_logo", children: [
              /* @__PURE__ */ n(
                "circle",
                {
                  fill: "url(#radialGradient-1)",
                  cx: "299.5",
                  cy: "299.5",
                  r: "299.5"
                }
              ),
              /* @__PURE__ */ n(
                "circle",
                {
                  fill: "url(#radialGradient-2)",
                  cx: "299.5",
                  cy: "299.5",
                  r: "299.5"
                }
              ),
              /* @__PURE__ */ n(
                "circle",
                {
                  fill: "url(#radialGradient-3)",
                  cx: "299.5",
                  cy: "299.5",
                  r: "299.5"
                }
              )
            ] })
          }
        )
      ]
    }
  );
}
function cr({
  children: e,
  maxWidth: t,
  fullScreen: r = !1,
  fadeTimeout: i = 800
}) {
  return /* @__PURE__ */ n(
    ri,
    {
      in: !0,
      timeout: i,
      mountOnEnter: !0,
      unmountOnExit: !0,
      children: /* @__PURE__ */ E(
        B,
        {
          sx: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: r ? "100vh" : "100%",
            justifyContent: t ? void 0 : "center",
            maxHeight: "100%",
            gap: 2,
            p: 2
          },
          children: [
            t && /* @__PURE__ */ n(B, { sx: {
              width: "100%",
              margin: "auto",
              maxWidth: t
            }, children: e }),
            !t && e
          ]
        }
      )
    }
  );
}
const nu = Q.memo(
  function({
    path: t,
    entityId: r,
    selectedSubPath: i,
    copy: a,
    collection: o,
    onValuesAreModified: s,
    formWidth: l,
    onUpdate: c,
    onClose: d
  }) {
    const A = Be(), u = Oe(A.breakpoints.up("lg")), p = he(!u), h = typeof l == "number" ? `${l}px` : l ?? cn, f = Ve(), g = Yr(), m = At(), v = rt(), b = re(), x = Ft(), [y, k] = M(a ? "copy" : r ? "existing" : "new"), [I, C] = M(r), S = he(void 0), D = S.current, P = (o.subcollections ?? []).filter((Y) => !Y.hideFromNavigation), R = P?.length ?? 0, $ = o.views, L = $?.length ?? 0, K = L > 0 || R > 0, V = _i(o), W = !i && u && V, [O, F] = Q.useState(W ? 0 : -1), G = O === -1 || u, {
      entity: U,
      dataLoading: j,
      dataLoadingError: se
    } = Cr({
      path: t,
      entityId: I,
      collection: o,
      useCache: !1
    }), [_, J] = M(U), [N, ee] = M(void 0);
    z(() => {
      U && J(U);
    }, [U]), z(() => {
      if (y === "new")
        ee(!1);
      else {
        const Y = _ ? ca(o, x, tt(t), _ ?? null) : !1;
        _ && ee(!Y);
      }
    }, [x, _, y]), z(() => {
      if (!i)
        F(-1);
      else {
        if ($) {
          const Y = $.map((be) => be.path).findIndex((be) => be === i);
          Y !== -1 && F(Y);
        }
        if (P) {
          const Y = P.map((be) => be.path).findIndex((be) => be === i);
          Y !== -1 && F(Y + L);
        }
      }
    }, [i, L, $, P]), z(() => {
      p.current !== u && (!i && u && V ? m.replace({
        path: t,
        entityId: r,
        selectedSubPath: V.path,
        updateUrl: !0
      }) : O === 0 && !u && V && m.replace({
        path: t,
        entityId: r,
        selectedSubPath: void 0,
        updateUrl: !0
      }), p.current = u);
    }, [u, O, V, p.current, i]);
    const T = w((Y) => {
      v.open({
        type: "error",
        message: "Error before saving: " + Y?.message
      }), console.error(Y);
    }, [v]), te = w((Y) => {
      v.open({
        type: "error",
        message: "Error after saving (entity is saved): " + Y?.message
      }), console.error(Y);
    }, [v]), me = (Y, be) => {
      v.open({
        type: "success",
        message: `${o.singularName ?? o.name}: Saved correctly`
      }), C(Y.id), J(Y), k("existing"), s(!1), c && c({ entity: Y }), be && (g.setBlocked(!1), g.close(!0), d?.());
    }, fe = w((Y) => {
      v.open({
        type: "error",
        message: "Error saving: " + Y?.message
      }), console.error("Error saving entity", t, r), console.error(Y);
    }, [r, t, v]), ge = w(async ({
      collection: Y,
      path: be,
      entityId: Ne,
      values: Rn,
      previousValues: Dn,
      closeAfterSave: Qn
    }) => {
      if (y)
        return Gi({
          path: be,
          entityId: Ne,
          values: Rn,
          previousValues: Dn,
          collection: Y,
          status: y,
          dataSource: f,
          context: b,
          onSaveSuccess: (Xt) => me(Xt, Qn),
          onSaveFailure: fe,
          onPreSaveHookError: T,
          onSaveSuccessHookError: te
        });
    }, [y, o, f, b, me, fe, T, te]), q = $ && $.map(
      (Y, be) => /* @__PURE__ */ n(
        B,
        {
          sx: {
            width: nn,
            height: "100%",
            overflow: "auto",
            borderLeft: `1px solid ${A.palette.divider}`,
            [A.breakpoints.down("lg")]: {
              borderLeft: "inherit",
              width: bt
            }
          },
          role: "tabpanel",
          flexGrow: 1,
          hidden: O !== be,
          children: /* @__PURE__ */ n(ue, { children: Y.builder({
            collection: o,
            entity: _,
            modifiedValues: D ?? _?.values
          }) })
        },
        `custom_view_${Y.path}_${be}`
      )
    ), je = j && !_ || (!_ || N === void 0) && (y === "existing" || y === "copy"), qt = P && P.map(
      (Y, be) => {
        const Ne = _ ? `${t}/${_?.id}/${Ce(Y.alias ?? Y.path)}` : void 0;
        return /* @__PURE__ */ E(
          B,
          {
            sx: {
              width: nn,
              height: "100%",
              overflow: "auto",
              borderLeft: `1px solid ${A.palette.divider}`,
              [A.breakpoints.down("lg")]: {
                borderLeft: "inherit",
                width: bt
              }
            },
            role: "tabpanel",
            flexGrow: 1,
            hidden: O !== be + L,
            children: [
              je && /* @__PURE__ */ n(kt, {}),
              !je && (_ && Ne ? /* @__PURE__ */ n(
                Ba,
                {
                  fullPath: Ne,
                  isSubCollection: !0,
                  ...Y
                }
              ) : /* @__PURE__ */ n(
                B,
                {
                  sx: {
                    width: "100%",
                    height: "100%",
                    p: 3
                  },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  children: /* @__PURE__ */ n(X, { variant: "label", children: "You need to save your entity before adding additional collections" })
                }
              ))
            ]
          },
          `subcol_${Y.name}_${be}`
        );
      }
    ), it = w((Y) => {
      if (Y !== -1) {
        if ($ && Y < L)
          return $[Y].path;
        if (P)
          return P[Y - L].path;
        throw Error("Something is wrong in getSelectedSubPath");
      }
    }, [$, L, P]), ht = w(() => {
      s(!1);
    }, []), Cn = w((Y) => {
      F(Y), r && m.replace({
        path: t,
        entityId: r,
        selectedSubPath: it(Y),
        updateUrl: !0
      });
    }, [r, m, t, it]), Xe = w((Y) => {
      S.current = Y;
    }, []), kn = N === void 0 ? null : N ? /* @__PURE__ */ n(
      ua,
      {
        entity: _,
        path: t,
        collection: o
      }
    ) : /* @__PURE__ */ n(
      Md,
      {
        status: y,
        path: t,
        collection: o,
        onEntitySave: ge,
        onDiscard: ht,
        onValuesChanged: Xe,
        onModified: s,
        entity: _
      },
      `form_${t}_${_?.id ?? "new"}`
    ), In = P && P.map(
      (Y) => /* @__PURE__ */ n(
        Mn,
        {
          sx: {
            fontSize: "0.875rem",
            minWidth: "140px"
          },
          wrapped: !0,
          label: Y.name
        },
        `entity_detail_collection_tab_${Y.name}`
      )
    ), Sn = $ && $.map(
      (Y) => /* @__PURE__ */ n(
        Mn,
        {
          sx: {
            fontSize: "0.875rem",
            minWidth: "140px"
          },
          wrapped: !0,
          label: Y.name
        },
        `entity_detail_custom_tab_${Y.name}`
      )
    ), Fn = /* @__PURE__ */ E(B, { sx: {
      paddingLeft: 2,
      paddingRight: 2,
      paddingTop: 1,
      display: "flex",
      alignItems: "end",
      backgroundColor: A.palette.mode === "light" ? A.palette.background.default : A.palette.background.paper
    }, children: [
      /* @__PURE__ */ n(
        B,
        {
          sx: {
            pb: 1,
            alignSelf: "center"
          },
          children: /* @__PURE__ */ n(
            ne,
            {
              onClick: () => (d?.(), g.close(!1)),
              size: "large",
              children: /* @__PURE__ */ n(xs, {})
            }
          )
        }
      ),
      /* @__PURE__ */ n(B, { flexGrow: 1 }),
      je && /* @__PURE__ */ n(
        B,
        {
          sx: {
            alignSelf: "center"
          },
          children: /* @__PURE__ */ n(dt, { size: 16, thickness: 8 })
        }
      ),
      /* @__PURE__ */ E(
        os,
        {
          value: O + 1,
          indicatorColor: "secondary",
          textColor: "inherit",
          onChange: (Y, be) => {
            Cn(be - 1);
          },
          sx: {
            paddingLeft: A.spacing(1),
            paddingRight: A.spacing(1),
            paddingTop: A.spacing(0)
          },
          variant: "scrollable",
          scrollButtons: "auto",
          children: [
            /* @__PURE__ */ n(
              Mn,
              {
                label: o.singularName ?? o.name,
                disabled: u || !K,
                sx: {
                  display: u ? "none" : void 0,
                  fontSize: "0.875rem",
                  minWidth: "140px"
                },
                wrapped: !0
              }
            ),
            Sn,
            In
          ]
        }
      )
    ] });
    return /* @__PURE__ */ n(
      B,
      {
        sx: {
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          transition: "width 250ms ease-in-out"
        },
        children: /* @__PURE__ */ E(Z, { children: [
          Fn,
          /* @__PURE__ */ n(jt, {}),
          /* @__PURE__ */ E(B, { sx: {
            flexGrow: 1,
            height: "100%",
            width: `calc(${nn} + ${h})`,
            maxWidth: "100%",
            [A.breakpoints.down("sm")]: {
              width: bt
            },
            display: "flex",
            overflow: "auto",
            flexDirection: "row"
          }, children: [
            /* @__PURE__ */ n(B, { sx: {
              position: "relative"
            }, children: /* @__PURE__ */ E(
              B,
              {
                role: "tabpanel",
                hidden: !G,
                sx: {
                  width: h,
                  maxWidth: "100%",
                  height: "100%",
                  overflow: "auto",
                  [A.breakpoints.down("sm")]: {
                    maxWidth: bt,
                    width: bt
                  }
                },
                children: [
                  /* @__PURE__ */ n(
                    B,
                    {
                      sx: (Y) => ({
                        width: "100%",
                        marginTop: Y.spacing(3),
                        paddingLeft: Y.spacing(4),
                        paddingRight: Y.spacing(4),
                        paddingTop: Y.spacing(3),
                        [Y.breakpoints.down("lg")]: {
                          marginTop: Y.spacing(2),
                          paddingLeft: Y.spacing(2),
                          paddingRight: Y.spacing(2),
                          paddingTop: Y.spacing(2)
                        },
                        [Y.breakpoints.down("md")]: {
                          marginTop: Y.spacing(1),
                          paddingLeft: Y.spacing(2),
                          paddingRight: Y.spacing(2),
                          paddingTop: Y.spacing(2)
                        }
                      }),
                      children: /* @__PURE__ */ n(
                        X,
                        {
                          sx: {
                            marginTop: 4,
                            marginBottom: 4
                          },
                          variant: "h4",
                          children: o.singularName ?? o.name + " entry"
                        }
                      )
                    }
                  ),
                  je ? /* @__PURE__ */ n(kt, {}) : kn
                ]
              }
            ) }),
            q,
            qt
          ] })
        ] })
      }
    );
  },
  Ae
);
function ru(e) {
  const {
    blocked: t,
    setBlocked: r,
    setBlockedNavigationMessage: i
  } = Yr(), a = Ie(), o = ie(() => {
    if (!e)
      return;
    let l = e.collection;
    if (!l && (l = e ? a.getCollection(e.path, e.entityId) : void 0, !l))
      throw console.error("ERROR: No collection found in path ", e.path, "Entity id: ", e.entityId), Error("ERROR: No collection found in path " + e.path);
    return l;
  }, [a, e]);
  z(() => {
    function l(c) {
      t && o && (c.preventDefault(), c.returnValue = `You have unsaved changes in this ${o.name}. Are you sure you want to leave this page?`);
    }
    return typeof window < "u" && window.addEventListener("beforeunload", l), () => {
      typeof window < "u" && window.removeEventListener("beforeunload", l);
    };
  }, [t, o]);
  const s = w((l) => {
    r(l), i(l ? /* @__PURE__ */ E(Z, { children: [
      " You have unsaved changes in this ",
      /* @__PURE__ */ n("b", { children: o?.name }),
      "."
    ] }) : void 0);
  }, [o?.name, r, i]);
  return !e || !o ? /* @__PURE__ */ n("div", { style: { width: cn } }) : /* @__PURE__ */ n(Z, { children: /* @__PURE__ */ n(ue, { children: /* @__PURE__ */ n(
    nu,
    {
      ...e,
      formWidth: e.width,
      collection: o,
      onValuesAreModified: s
    }
  ) }) });
}
const Ia = "new";
function ou(e, t) {
  if (t)
    return bt;
  const r = !e.selectedSubPath, i = typeof e.width == "number" ? `${e.width}px` : e.width;
  return r ? i ?? cn : `calc(${nn} + ${i ?? cn})`;
}
const iu = (e, t) => {
  const r = Nt(), i = he(!1), a = Be(), o = Oe(a.breakpoints.up("lg")), s = Oe(a.breakpoints.down("sm"));
  z(() => {
    if (!e.loading && !i.current) {
      if (e.isUrlCollectionPath(r.pathname)) {
        const A = r.hash === `#${Ia}`, u = e.urlPathToDataPath(r.pathname), p = au(u, e.collections, A);
        t.replace(p.map((h) => jn(h, e, s)));
      }
      i.current = !0;
    }
  }, [r, e, t, s]);
  const l = w(() => {
    t.close();
  }, [t]), c = w((A) => {
    if (A.copy && !A.entityId)
      throw Error("If you want to copy an entity you need to provide an entityId");
    const u = o && A.collection ? _i(A.collection) : void 0;
    t.open(jn({ selectedSubPath: u?.path, ...A }, e, s));
  }, [o, t, e, s]), d = w((A) => {
    if (A.copy && !A.entityId)
      throw Error("If you want to copy an entity you need to provide an entityId");
    t.replace(jn(A, e, s));
  }, [e, t, s]);
  return {
    close: l,
    open: c,
    replace: d
  };
};
function au(e, t, r) {
  const i = Br({
    path: e,
    collections: t
  }), a = [];
  let o = "";
  for (let s = 0; s < i.length; s++) {
    const l = i[s];
    if (l.type === "collection" && (o = l.path), s > 0) {
      const c = i[s - 1];
      if (l.type === "entity")
        a.push(
          {
            path: l.path,
            entityId: l.entityId,
            copy: !1
          }
        );
      else if (l.type === "custom_view") {
        if (c.type === "entity") {
          const d = a[a.length - 1];
          d && (d.selectedSubPath = l.view.path);
        }
      } else if (l.type === "collection" && c.type === "entity") {
        const d = a[a.length - 1];
        d && (d.selectedSubPath = l.collection.alias ?? l.collection.path);
      }
    }
  }
  return r && a.push({
    path: o,
    copy: !1
  }), a;
}
const jn = (e, t, r) => {
  const i = Ce(e.path), a = e.entityId ? t.buildUrlCollectionPath(`${i}/${e.entityId}/${e.selectedSubPath || ""}`) : t.buildUrlCollectionPath(`${i}#${Ia}`);
  return {
    key: `${e.path}/${e.entityId}`,
    component: /* @__PURE__ */ n(ru, { ...e }),
    urlPath: a,
    parentUrlPath: t.buildUrlCollectionPath(i),
    width: ou(e, r),
    onClose: e.onClose
  };
};
function su({
  basePath: e,
  baseCollectionPath: t,
  authController: r,
  collections: i,
  views: a,
  collectionOverrideHandler: o,
  userConfigPersistence: s,
  plugins: l,
  dataSource: c
}) {
  const d = Nt(), [A, u] = M(), [p, h] = M(), [f, g] = M(!1), [m, v] = M(void 0), [b, x] = M(!0), [y, k] = M(void 0), I = Ce(e), C = Ce(t), S = I ? `/${I}` : "/", D = I ? `/${I}/${C}` : `/${C}`, P = w(
    (j) => I ? `/${I}/${en(j)}` : `/${en(j)}`,
    [I]
  ), R = w(
    (j) => `${Ce(t)}/${en(j)}`,
    [t]
  ), $ = w((j, se) => {
    const _ = [
      ...(j ?? []).map((N) => N.hideFromNavigation ? void 0 : {
        url: R(N.alias ?? N.path),
        type: "collection",
        name: N.name.trim(),
        path: N.alias ?? N.path,
        collection: N,
        description: N.description?.trim(),
        group: N.group?.trim()
      }).filter(Boolean),
      ...(se ?? []).map((N) => N.hideFromNavigation ? void 0 : {
        url: P(Array.isArray(N.path) ? N.path[0] : N.path),
        name: N.name.trim(),
        type: "view",
        view: N,
        description: N.description?.trim(),
        group: N.group?.trim()
      }).filter(Boolean)
    ], J = Object.values(_).map((N) => N.group).filter(Boolean).filter((N, ee, T) => T.indexOf(N) === ee);
    return { navigationEntries: _, groups: J };
  }, [P, R]), L = w(async () => {
    try {
      const [j = [], se = []] = await Promise.all(
        [
          lu(i, r, c, l),
          cu(a, r, c)
        ]
      );
      u(j), h(se), v($(j ?? [], se));
    } catch (j) {
      console.error(j), k(j);
    }
    x(!1), g(!0);
  }, [i, r.user, c, l, a, $]);
  z(() => {
    L();
  }, [L]);
  const K = w((j, se, _ = !1) => {
    if (!A)
      return;
    const J = Er(Ce(j), A), N = _ ? s?.getCollectionConfig(j) : void 0, ee = J ? Ze(J, N) : void 0;
    let T = ee;
    const te = o && o({
      entityId: se,
      path: Ce(j)
    });
    if (te && (T = te), ee) {
      const me = ee.subcollections, fe = ee.callbacks, ge = ee.permissions;
      T = {
        ...T,
        subcollections: T?.subcollections ?? me,
        callbacks: T?.callbacks ?? fe,
        permissions: T?.permissions ?? ge
      };
    }
    if (T)
      return { ...ee, ...T };
  }, [
    e,
    t,
    A,
    o
  ]), V = w(
    (j) => Ce(j + "/").startsWith(Ce(D) + "/"),
    [D]
  ), W = w((j) => {
    if (j.startsWith(D))
      return j.replace(D, "");
    throw Error("Expected path starting with " + D);
  }, [D]), O = w(
    ({
      path: j
    }) => `s/edit/${en(j)}`,
    []
  ), F = w((j) => {
    if (!A)
      throw Error("Collections have not been initialised yet");
    return ki(j, A);
  }, [A]), G = d.state, U = G && G.base_location ? G.base_location : d;
  return {
    collections: A ?? [],
    views: p ?? [],
    loading: !f || b,
    navigationLoadingError: y,
    homeUrl: S,
    basePath: e,
    baseCollectionPath: t,
    initialised: f,
    getCollection: K,
    isUrlCollectionPath: V,
    urlPathToDataPath: W,
    buildUrlCollectionPath: R,
    buildUrlEditCollectionPath: O,
    buildCMSUrlPath: P,
    resolveAliasesFrom: F,
    topLevelNavigation: m,
    baseLocation: U,
    refreshNavigation: L
  };
}
function en(e) {
  return encodeURIComponent(Ce(e)).replaceAll("%2F", "/").replaceAll("%23", "#");
}
async function lu(e, t, r, i) {
  let a = [];
  return typeof e == "function" ? a = await e({
    user: t.user,
    authController: t,
    dataSource: r
  }) : Array.isArray(e) && (a = e), i && i.forEach((o) => {
    o.collections?.injectCollections && (a = o.collections?.injectCollections(a ?? []));
  }), a;
}
async function cu(e, t, r) {
  let i = [];
  return typeof e == "function" ? i = await e({
    user: t.user,
    authController: t,
    dataSource: r
  }) : Array.isArray(e) && (i = e), i;
}
function du() {
  const e = Nt(), t = hr(), [r, i] = M([]), a = he(r), o = he({}), s = he(0), l = (u) => {
    a.current = u, i(u);
  };
  z(() => {
    const h = (e.state?.panels ?? []).map((f) => o.current[f]).filter((f) => Boolean(f));
    Ae(a.current.map((f) => f.key), h.map((f) => f.key)) || l(h);
  }, [e]);
  const c = w(() => {
    if (r.length === 0)
      return;
    const u = r[r.length - 1], p = [...r.slice(0, -1)];
    if (l(p), s.current > 0)
      u.urlPath && t(-1), s.current--;
    else if (u.parentUrlPath) {
      const h = e.state?.base_location ?? e;
      t(
        u.parentUrlPath,
        {
          replace: !0,
          state: {
            base_location: h,
            panels: p.map((f) => f.key)
          }
        }
      );
    }
  }, [r, t, e]), d = w((u) => {
    const p = Array.isArray(u) ? u : [u];
    p.forEach((g) => {
      o.current[g.key] = g;
    }), s.current = s.current + p.length;
    const h = e.state?.base_location ?? e, f = [...r, ...p];
    l(f), p.forEach((g) => {
      g.urlPath && t(
        g.urlPath,
        {
          state: {
            base_location: h,
            panels: f.map((m) => m.key)
          }
        }
      );
    });
  }, [e, t, r]), A = w((u) => {
    const p = Array.isArray(u) ? u : [u];
    p.forEach((g) => {
      o.current[g.key] = g;
    });
    const h = e.state?.base_location ?? e, f = [...r.slice(0, -p.length), ...p];
    l(f), p.forEach((g) => {
      g.urlPath && t(
        g.urlPath,
        {
          replace: !0,
          state: {
            base_location: h,
            panels: f.map((m) => m.key)
          }
        }
      );
    });
  }, [e, t, r]);
  return {
    sidePanels: r,
    close: c,
    open: d,
    replace: A
  };
}
const Au = "/c";
function uu(e) {
  const t = kr(), {
    children: r,
    collections: i,
    views: a,
    entityLinkBuilder: o,
    userConfigPersistence: s,
    dateTimeFormat: l,
    locale: c,
    authController: d,
    collectionOverrideHandler: A,
    storageSource: u,
    dataSource: p,
    basePath: h,
    baseCollectionPath: f,
    plugins: g,
    onAnalyticsEvent: m,
    fields: v
  } = e, b = h ?? "/", x = f ?? Au, y = c ? Jo[c] : void 0, k = su({
    basePath: b,
    baseCollectionPath: x,
    authController: d,
    collections: i,
    views: a,
    collectionOverrideHandler: A,
    userConfigPersistence: s,
    dataSource: p,
    plugins: g
  }), I = du(), C = iu(k, I);
  rt();
  const S = d.initialLoading || k.loading || (g?.some((P) => P.loading) ?? !1);
  if (k.navigationLoadingError)
    return /* @__PURE__ */ n(cr, { maxWidth: 300, fullScreen: !0, children: /* @__PURE__ */ n(
      xe,
      {
        title: "Error loading navigation",
        error: k.navigationLoadingError
      }
    ) });
  if (d.authError)
    return /* @__PURE__ */ n(cr, { maxWidth: 300, fullScreen: !0, children: /* @__PURE__ */ n(
      xe,
      {
        title: "Error loading auth",
        error: d.authError
      }
    ) });
  const D = {
    entityLinkBuilder: o,
    dateTimeFormat: l,
    locale: c,
    plugins: g,
    onAnalyticsEvent: m,
    fields: v
  };
  return /* @__PURE__ */ n(xr.Provider, { value: t, children: /* @__PURE__ */ n($i.Provider, { value: D, children: /* @__PURE__ */ n(
    Mi.Provider,
    {
      value: s,
      children: /* @__PURE__ */ n(
        Ti.Provider,
        {
          value: u,
          children: /* @__PURE__ */ n(
            Si.Provider,
            {
              value: p,
              children: /* @__PURE__ */ n(
                Ri.Provider,
                {
                  value: d,
                  children: /* @__PURE__ */ n(
                    Di.Provider,
                    {
                      value: I,
                      children: /* @__PURE__ */ n(
                        Qi.Provider,
                        {
                          value: C,
                          children: /* @__PURE__ */ n(
                            Fi.Provider,
                            {
                              value: k,
                              children: /* @__PURE__ */ n(ec, { children: /* @__PURE__ */ n(
                                Pa,
                                {
                                  dateAdapter: Ma,
                                  utils: $a,
                                  locale: y,
                                  children: /* @__PURE__ */ n(
                                    fu,
                                    {
                                      loading: S,
                                      children: r
                                    }
                                  )
                                }
                              ) })
                            }
                          )
                        }
                      )
                    }
                  )
                }
              )
            }
          )
        }
      )
    }
  ) }) });
}
function fu({
  loading: e,
  children: t
}) {
  const r = re();
  let i = t({
    context: r,
    loading: e
  });
  const a = r.plugins;
  return !e && a && a.forEach((o) => {
    o.wrapperComponent && (i = /* @__PURE__ */ n(
      o.wrapperComponent.Component,
      {
        ...o.wrapperComponent.props,
        context: r,
        children: i
      }
    ));
  }), /* @__PURE__ */ n(Z, { children: i });
}
function gu({
  drawerOpen: e,
  closeDrawer: t
}) {
  const r = re(), i = Ie(), [a, o] = M(!1), s = a && !e, l = w(() => o(!0), []), c = w(() => o(!1), []);
  if (!i.topLevelNavigation)
    throw Error("Navigation not ready in Drawer");
  const {
    navigationEntries: d,
    groups: A
  } = i.topLevelNavigation, u = Object.values(d).filter((f) => !f.group), p = w((f) => e ? /* @__PURE__ */ n(B, { pt: 2, pl: 2, pr: 2, pb: 0.5, sx: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  }, children: /* @__PURE__ */ n(
    X,
    {
      variant: "caption",
      color: "textSecondary",
      className: "weight-500",
      sx: { flexGrow: 1 },
      children: f ? f.toUpperCase() : "Ungrouped views".toUpperCase()
    }
  ) }) : /* @__PURE__ */ n(B, { sx: { height: 16 } }), [e]), h = (f) => {
    const g = f.type === "collection" ? "drawer_navigate_to_collection" : f.type === "view" ? "drawer_navigate_to_view" : "unmapped_event";
    r.onAnalyticsEvent?.(g, { url: f.url });
  };
  return /* @__PURE__ */ E(
    is,
    {
      onMouseEnter: l,
      onMouseMove: l,
      onMouseLeave: c,
      children: [
        A.map((f) => /* @__PURE__ */ E(
          Q.Fragment,
          {
            children: [
              p(f),
              Object.values(d).filter((g) => g.group === f).map((g, m) => /* @__PURE__ */ n(
                Uo,
                {
                  Icon: or(g.collection ?? g.view),
                  tooltipsOpen: s,
                  drawerOpen: e,
                  onClick: () => h(g),
                  url: g.url,
                  name: g.name
                },
                `navigation_${m}`
              ))
            ]
          },
          `drawer_group_${f}`
        )),
        u.length > 0 && p(),
        u.map((f, g) => /* @__PURE__ */ n(
          Uo,
          {
            Icon: or(f.collection ?? f.view),
            tooltipsOpen: s,
            onClick: () => h(f),
            drawerOpen: e,
            url: f.url,
            name: f.name
          },
          `navigation_${g}`
        ))
      ]
    }
  );
}
function Uo({
  name: e,
  Icon: t,
  drawerOpen: r,
  tooltipsOpen: i,
  url: a,
  onClick: o
}) {
  const s = Be(), c = /* @__PURE__ */ E(
    as,
    {
      button: !0,
      component: ii,
      onClick: o,
      style: ({ isActive: d }) => ({
        fontWeight: d ? "600" : "500",
        background: d ? s.palette.mode === "light" ? ye(s.palette.background.default, 0.1) : et(s.palette.background.default, 0.08) : "inherit",
        minHeight: "48px",
        borderRadius: "0 16px 16px 0"
      }),
      sx: (d) => ({
        pl: 3,
        alignItems: "center"
      }),
      to: a,
      children: [
        /* @__PURE__ */ n(
          t,
          {
            fontSize: "medium",
            sx: (d) => ({ color: d.palette.mode === "dark" ? uo[500] : uo[700] })
          }
        ),
        /* @__PURE__ */ n(
          X,
          {
            variant: "subtitle2",
            sx: {
              opacity: r ? 1 : 0,
              fontWeight: "inherit",
              ml: 3,
              p: 0.5
            },
            children: e.toUpperCase()
          }
        )
      ]
    }
  );
  return r ? c : /* @__PURE__ */ n(
    de,
    {
      open: i,
      placement: "right",
      title: e,
      children: c
    }
  );
}
const hu = function({
  title: t,
  toolbarExtraWidget: r,
  drawerOpen: i
}) {
  const a = Ir(), { breadcrumbs: o } = a, s = Ft(), { mode: l, toggleMode: c } = kr(), d = Be(), A = Oe(d.breakpoints.up("md")), u = s.user?.displayName ? s.user.displayName[0].toUpperCase() : s.user?.email ? s.user.email[0].toUpperCase() : "A";
  return /* @__PURE__ */ n(
    B,
    {
      sx: {
        position: "fixed",
        marginLeft: d.spacing(8),
        width: `calc(100% - ${d.spacing(8)})`,
        zIndex: A ? d.zIndex.drawer + 1 : void 0,
        transition: d.transitions.create(["width", "margin"], {
          easing: d.transitions.easing.sharp,
          duration: d.transitions.duration.leavingScreen
        }),
        ...i && A && {
          marginLeft: `calc(${Wt}px - 8px)`,
          width: `calc(100% - ${Wt}px)`,
          transition: d.transitions.create(["width", "margin"], {
            easing: d.transitions.easing.sharp,
            duration: d.transitions.duration.enteringScreen
          })
        }
      },
      children: /* @__PURE__ */ n(
        Ar,
        {
          direction: "down",
          in: !0,
          mountOnEnter: !0,
          unmountOnExit: !0,
          children: /* @__PURE__ */ E(oi, { sx: { gap: 1 }, children: [
            /* @__PURE__ */ n(ti, { lgDown: !0, children: /* @__PURE__ */ n(B, { mr: 2, children: /* @__PURE__ */ n(
              Gt,
              {
                underline: "none",
                color: "inherit",
                component: Hn,
                to: ".",
                children: /* @__PURE__ */ n(
                  X,
                  {
                    variant: "h6",
                    noWrap: !0,
                    className: "weight-500",
                    children: t
                  }
                )
              },
              "breadcrumb-home"
            ) }) }),
            A && /* @__PURE__ */ n(B, { children: /* @__PURE__ */ n(
              ss,
              {
                separator: /* @__PURE__ */ n(
                  Wl,
                  {
                    htmlColor: "rgb(0,0,0,0.87)",
                    fontSize: "small"
                  }
                ),
                "aria-label": "breadcrumb",
                children: o.map(
                  (p, h) => /* @__PURE__ */ n(
                    Gt,
                    {
                      underline: "none",
                      color: "inherit",
                      component: Hn,
                      to: p.url,
                      children: /* @__PURE__ */ n(
                        qo,
                        {
                          sx: (f) => ({
                            backgroundColor: f.palette.grey[200],
                            height: f.spacing(3),
                            color: f.palette.grey[800],
                            fontWeight: f.typography.fontWeightMedium,
                            "&:hover, &:focus": {
                              cursor: "pointer",
                              backgroundColor: f.palette.grey[300]
                            },
                            "&:active": {
                              boxShadow: f.shadows[1],
                              backgroundColor: f.palette.grey[400]
                            }
                          }),
                          label: p.title
                        }
                      )
                    },
                    `breadcrumb-${h}`
                  )
                )
              }
            ) }),
            /* @__PURE__ */ n(B, { flexGrow: 1 }),
            r && /* @__PURE__ */ n(ue, { children: r }),
            /* @__PURE__ */ n(B, { p: 1, children: /* @__PURE__ */ n(
              ne,
              {
                color: "inherit",
                "aria-label": "Open drawer",
                edge: "start",
                onClick: () => c(),
                size: "large",
                children: l === "dark" ? /* @__PURE__ */ n(Vl, {}) : /* @__PURE__ */ n(Yl, {})
              }
            ) }),
            /* @__PURE__ */ n(B, { p: 1, children: s.user && s.user.photoURL ? /* @__PURE__ */ n(
              _r,
              {
                src: s.user.photoURL
              }
            ) : /* @__PURE__ */ n(_r, { children: u }) }),
            /* @__PURE__ */ n(
              ae,
              {
                variant: "text",
                color: "inherit",
                onClick: s.signOut,
                children: "Log Out"
              }
            )
          ] })
        }
      )
    }
  );
}, Wt = 280, pu = Q.memo(
  function(t) {
    const {
      children: r,
      name: i,
      logo: a,
      toolbarExtraWidget: o,
      Drawer: s
    } = t, l = Be(), c = Oe(l.breakpoints.up("md")), d = Ie(), A = mu(), [u, p] = Q.useState(!1), h = s || gu, f = w(() => {
      p(!1);
    }, []);
    return /* @__PURE__ */ E(B, { sx: {
      display: "flex",
      height: "100vh",
      width: "100vw",
      pt: "env(safe-area-inset-top)",
      pl: "env(safe-area-inset-left)",
      pr: "env(safe-area-inset-right)",
      pb: "env(safe-area-inset-bottom)"
    }, children: [
      /* @__PURE__ */ n(
        hu,
        {
          title: i,
          drawerOpen: u,
          toolbarExtraWidget: o
        }
      ),
      /* @__PURE__ */ n(
        wu,
        {
          open: u,
          logo: a,
          setDrawerOpen: p,
          children: /* @__PURE__ */ n("nav", { children: d.loading ? /* @__PURE__ */ n(kt, {}) : /* @__PURE__ */ n(
            h,
            {
              drawerOpen: u,
              closeDrawer: f
            }
          ) })
        }
      ),
      /* @__PURE__ */ E(
        B,
        {
          component: "main",
          sx: {
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            width: "100%",
            height: "100%",
            overflow: "auto"
          },
          children: [
            /* @__PURE__ */ n(bu, {}),
            /* @__PURE__ */ n(
              B,
              {
                ref: A,
                sx: {
                  flexGrow: 1,
                  m: c ? 2 : 1,
                  borderRadius: "12px",
                  border: `1px solid ${l.palette.divider}`,
                  height: "100%",
                  overflow: "auto"
                },
                children: /* @__PURE__ */ n(ue, { children: r })
              }
            )
          ]
        }
      )
    ] });
  },
  Ae
);
function mu() {
  const e = Q.useRef({}), t = Nt(), r = Q.createRef(), i = () => {
    !r.current || !t.key || (e.current[t.key] = r.current.scrollTop);
  };
  return z(() => {
    const a = r.current;
    if (a)
      return a.addEventListener("scroll", i, { passive: !0 }), () => {
        a && a.removeEventListener("scroll", i);
      };
  }, [r, t]), z(() => {
    !r.current || !e.current || !e.current[t.key] || r.current.scrollTo(
      {
        top: e.current[t.key],
        behavior: "auto"
      }
    );
  }, [t]), r;
}
const bu = We("div")(({ theme: e }) => ({
  display: "flex",
  flexDirection: "column",
  ...e.mixins.toolbar
}));
function wu(e) {
  const t = re(), r = Be(), i = Oe(r.breakpoints.up("md")), {
    open: a,
    logo: o,
    setDrawerOpen: s,
    ...l
  } = e;
  let c;
  o ? c = /* @__PURE__ */ n(
    "img",
    {
      style: {
        maxWidth: "100%",
        maxHeight: "100%"
      },
      src: o,
      alt: "Logo"
    }
  ) : c = /* @__PURE__ */ n(ka, {});
  const d = /* @__PURE__ */ n(
    fo,
    {
      color: "inherit",
      "aria-label": "Open drawer",
      edge: "start",
      onClick: () => s(!0),
      size: "large",
      sx: {
        position: "absolute",
        top: 8,
        left: 24
      },
      children: /* @__PURE__ */ n(Gl, {})
    }
  );
  return /* @__PURE__ */ E(Z, { children: [
    !i && d,
    /* @__PURE__ */ E(
      ls,
      {
        ...l,
        variant: i ? "permanent" : "temporary",
        open: a,
        onClose: i ? void 0 : () => s(!1),
        sx: {
          width: Wt,
          flexShrink: 0,
          height: "100%",
          whiteSpace: "nowrap",
          boxSizing: "border-box",
          border: "none",
          ...a && {
            ...jo(r),
            "& .MuiDrawer-paper": jo(r)
          },
          ...!a && {
            ...No(r, i),
            "& .MuiDrawer-paper": No(r, i)
          }
        },
        children: [
          /* @__PURE__ */ n(
            fo,
            {
              onClick: () => s(!1),
              sx: {
                position: "absolute",
                right: 16,
                top: 16,
                opacity: a ? 1 : 0,
                transition: r.transitions.create("opacity", {
                  easing: r.transitions.easing.sharp,
                  duration: r.transitions.duration.enteringScreen
                })
              },
              children: r.direction === "rtl" ? /* @__PURE__ */ n(Ll, {}) : /* @__PURE__ */ n(Ol, {})
            }
          ),
          /* @__PURE__ */ n(oi, { sx: {
            position: "absolute",
            left: a ? "-100%" : 0,
            opacity: a ? 0 : 1,
            transition: r.transitions.create(["left", "opacity"], {
              easing: r.transitions.easing.sharp,
              duration: r.transitions.duration.enteringScreen
            })
          }, children: a ? d : /* @__PURE__ */ n(
            de,
            {
              title: "Open menu",
              placement: "right",
              children: d
            }
          ) }),
          /* @__PURE__ */ n(
            Gt,
            {
              color: "inherit",
              component: ii,
              to: ".",
              sx: (A) => ({
                transition: A.transitions.create(["padding"], {
                  easing: A.transitions.easing.sharp,
                  duration: A.transitions.duration.enteringScreen
                }),
                p: A.spacing(
                  a ? 4 : 9,
                  a ? 12 : 2,
                  0,
                  a ? 3 : 2
                )
              }),
              children: /* @__PURE__ */ n(de, { title: "Home", placement: "right", children: /* @__PURE__ */ n("div", { onClick: () => {
                t.onAnalyticsEvent?.("drawer_navigate_to_home");
              }, children: c }) })
            },
            "breadcrumb-home"
          ),
          e.children,
          /* @__PURE__ */ E(
            Gt,
            {
              sx: (A) => ({
                width: Wt,
                position: "fixed",
                bottom: 0,
                left: a ? 0 : "-100%",
                opacity: a ? 1 : 0,
                transition: A.transitions.create(["left", "opacity"], {
                  easing: A.transitions.easing.sharp,
                  duration: A.transitions.duration.enteringScreen
                }),
                px: "24px",
                py: 1,
                display: "flex",
                alignItems: "center",
                fontWeight: A.typography.fontWeightMedium,
                background: A.palette.mode === "light" ? "rgba(255,255,255,0.6)" : sn(A.palette.background.paper, 0.1),
                backdropFilter: "blur(8px)"
              }),
              href: "https://firecms.co?utm_source=drawer",
              onMouseDown: (A) => {
                A.preventDefault();
              },
              target: "_blank",
              children: [
                /* @__PURE__ */ n(
                  Ht,
                  {
                    style: { marginRight: "24px" },
                    fontSize: "small"
                  }
                ),
                "firecms.co"
              ]
            }
          )
        ]
      }
    )
  ] });
}
const jo = (e) => ({
  willChange: "width",
  pb: "32px",
  width: Wt,
  border: "none",
  transition: e.transitions.create("width", {
    easing: e.transitions.easing.sharp,
    duration: e.transitions.duration.enteringScreen
  }),
  backgroundColor: e.palette.background.default,
  overflowX: "hidden"
}), No = (e, t) => ({
  willChange: "width",
  transition: e.transitions.create("width", {
    easing: e.transitions.easing.sharp,
    duration: e.transitions.duration.leavingScreen
  }),
  border: "none",
  overflowX: "hidden",
  backgroundColor: e.palette.background.default,
  width: t ? `calc(${e.spacing(9)})` : "0px"
}), vu = ({ mode: e, primaryColor: t, secondaryColor: r, fontFamily: i, headersFontFamily: a }) => ({
  ...cs({
    palette: {
      mode: e,
      background: {
        default: e === "dark" ? "#202024" : "#f8f8fa",
        paper: e === "dark" ? "#121215" : "#ffffff"
      },
      primary: {
        main: t || "#0070f4"
      },
      secondary: {
        main: r || Ql[400]
      },
      error: {
        main: Tl.A400
      }
    },
    shape: {
      borderRadius: 6
    },
    typography: {
      fontFamily: i || "'Rubik', 'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontWeightMedium: 500,
      h6: {
        fontFamily: i || "'Rubik', 'Roboto', 'Helvetica', 'Arial', sans-serif",
        fontSize: "1.15rem",
        fontWeight: 500
      },
      h5: {
        fontFamily: i || "'Rubik', 'Roboto', 'Helvetica', 'Arial', sans-serif",
        fontSize: "1.55rem"
      },
      h4: {
        fontFamily: i || "'Rubik', 'Roboto', 'Helvetica', 'Arial', sans-serif",
        fontSize: "2rem",
        fontWeight: 500
      },
      h3: {
        fontFamily: i || "'Rubik', 'Roboto', 'Helvetica', 'Arial', sans-serif",
        fontWeight: 600
      },
      h2: {
        fontFamily: a || "'IBM Plex Mono', 'Space Mono', 'Rubik', 'Roboto', 'Helvetica', 'Arial', sans-serif",
        fontWeight: 600
      },
      h1: {
        fontFamily: a || "'IBM Plex Mono', 'Space Mono', 'Rubik', 'Roboto', 'Helvetica', 'Arial', sans-serif",
        fontWeight: 600
      },
      label: {
        display: "block",
        color: "#838383",
        fontWeight: 500,
        fontSize: "0.875rem",
        lineHeight: 1.43
      }
    },
    components: {
      MuiSkeleton: {
        styleOverrides: {
          root: {
            borderRadius: 6
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 6
          }
        }
      },
      MuiTableRow: {
        styleOverrides: {
          root: {
            "&:last-child td": {
              borderBottom: 0
            }
          }
        }
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            "&.mono": {
              fontFamily: "'IBM Plex Mono', 'Space Mono', monospace, 'Lucida Console'"
            },
            "&.weight-500": {
              fontWeight: 500
            }
          }
        }
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            "&.mono": {
              fontFamily: "'IBM Plex Mono', 'Space Mono', 'Lucida Console', monospace"
            },
            "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
              display: "none"
            },
            "& input[type=number]": {
              MozAppearance: "textfield"
            }
          }
        }
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            borderRadius: 6
          }
        }
      },
      MuiCardActionArea: {
        styleOverrides: {
          root: {
            borderRadius: 6
          }
        }
      }
    }
  })
}), yu = Q.memo(
  function({
    HomePage: t = eu,
    customRoutes: r
  }) {
    const i = Nt(), a = Ie(), s = re().plugins ?? [];
    if (!a)
      return /* @__PURE__ */ n(Z, {});
    const l = i.state, c = l && l.base_location ? l.base_location : i, d = [];
    a.views && a.views.forEach((f) => {
      Array.isArray(f.path) ? d.push(...f.path.map((g) => Ho(g, f))) : d.push(Ho(f.path, f));
    });
    const u = [...a.collections ?? []].sort((f, g) => g.path.length - f.path.length).map(
      (f) => {
        const g = a.buildUrlCollectionPath(f.alias ?? f.path), m = [];
        return s && s.forEach((v) => {
          v.collections?.CollectionActions && m.push(...lr(v.collections?.CollectionActions));
        }), m.push(...lr(f.Actions)), /* @__PURE__ */ n(
          tn,
          {
            path: g + "/*",
            element: /* @__PURE__ */ n(
              dr,
              {
                path: g,
                title: f.name,
                type: "collection",
                children: /* @__PURE__ */ n(
                  Ba,
                  {
                    isSubCollection: !1,
                    fullPath: f.alias ?? f.path,
                    ...f,
                    Actions: m
                  },
                  `collection_view_${f.alias ?? f.path}`
                )
              }
            )
          },
          `navigation_${f.alias ?? f.path}`
        );
      }
    ), p = /* @__PURE__ */ n(
      tn,
      {
        path: "/",
        element: /* @__PURE__ */ n(
          dr,
          {
            path: a.homeUrl,
            title: "Home",
            type: "home",
            children: /* @__PURE__ */ n(t, {})
          },
          "navigation_home"
        )
      }
    );
    return /* @__PURE__ */ E(us, { location: c, children: [
      u,
      d,
      p,
      /* @__PURE__ */ n(
        tn,
        {
          path: "*",
          element: /* @__PURE__ */ n(tu, {})
        }
      ),
      r
    ] });
  }
), Ho = (e, t) => /* @__PURE__ */ n(
  tn,
  {
    path: e,
    element: /* @__PURE__ */ n(
      dr,
      {
        path: e,
        title: t.name,
        type: "view",
        children: t.view
      },
      `navigation_${e}`
    )
  },
  "navigation_view_" + e
), dr = Q.memo(
  function({
    children: t,
    title: r,
    path: i,
    type: a
  }) {
    const o = Ir();
    return Q.useEffect(() => {
      o.set({
        breadcrumbs: [{
          title: r,
          url: i
        }]
      });
    }, [i, r]), /* @__PURE__ */ n(Z, { children: t });
  },
  Ae
);
function qg(e) {
  return e;
}
function Xg(e) {
  return e;
}
function Kg(e) {
  return e;
}
function eh(e) {
  return e;
}
function th(e) {
  return e;
}
function nh(e) {
  return e;
}
function rh(e) {
  return e;
}
function oh(e) {
  return e;
}
function ih(e) {
  return e;
}
function xu() {
  const e = Oe("(prefers-color-scheme: dark)"), r = (localStorage.getItem("prefers-dark-mode") != null ? localStorage.getItem("prefers-dark-mode") === "true" : null) ?? e, [i, a] = M(r ? "dark" : "light");
  z(() => {
    a(r ? "dark" : "light"), l(r ? "dark" : "light");
  }, [r]);
  const o = w(() => {
    a("dark"), l("dark");
  }, [e]), s = w(() => {
    a("light"), l("light");
  }, []), l = w((d) => {
    document.body.style.setProperty("color-scheme", d);
  }, [document]), c = w(() => {
    i === "light" ? (e ? localStorage.removeItem("prefers-dark-mode") : localStorage.setItem("prefers-dark-mode", "true"), o()) : (e ? localStorage.setItem("prefers-dark-mode", "false") : localStorage.removeItem("prefers-dark-mode"), s());
  }, [i, e]);
  return {
    mode: i,
    setMode: a,
    toggleMode: c
  };
}
function Eu() {
  const [e, t] = M({}), r = w((o) => {
    const s = localStorage.getItem(o);
    return s ? JSON.parse(s) : {};
  }, []), i = w((o) => {
    const s = `collection_config::${Co(o)}`;
    return e[s] ? e[s] : r(s);
  }, [e, r]);
  return {
    onCollectionModified: w((o, s) => {
      const l = `collection_config::${Co(o)}`;
      localStorage.setItem(l, JSON.stringify(s)), t((c) => {
        const d = c[l], A = Ze(d ?? r(o), s);
        return Ze(c, A);
      });
    }, [r]),
    getCollectionConfig: i
  };
}
const Bu = ({ children: e }) => /* @__PURE__ */ n(
  hs,
  {
    maxSnack: 3,
    autoHideDuration: 3500,
    children: e
  }
), Cu = ({
  firebaseApp: e,
  signInOptions: t
}) => {
  const [r, i] = M(void 0), [a, o] = M(), [s, l] = M(), [c, d] = M(!0), [A, u] = M(!0), [p, h] = M(!1), [f, g] = M(), [m, v] = M();
  z(() => {
    if (e)
      try {
        const F = Se(e);
        return o(void 0), i(F.currentUser), Xs(
          F,
          x,
          (G) => l(G)
        );
      } catch (F) {
        return o(F), () => {
        };
      }
  }, [e]);
  const b = w(() => {
    h(!0), i(null);
  }, []), x = w(async (F) => {
    i(F), d(!1), u(!1);
  }, []), y = w(() => {
    const F = Se(e);
    Ks(F).then((G) => {
      i(null), l(null);
    }), h(!1);
  }, [e]), k = w((F) => t.find((G) => {
    if (G === null)
      throw Error("useFirebaseAuthController");
    if (typeof G == "object" && G.provider === F)
      return G;
  }), [t]), I = w(() => {
    const F = new mi(), G = k("google.com");
    G?.scopes && G.scopes.forEach((j) => F.addScope(j)), G?.customParameters && F.setCustomParameters(G.customParameters);
    const U = Se();
    eo(U, F).catch(l);
  }, [k]), C = w((F, G) => {
    u(!0), eo(F, G).catch(l).then(() => u(!1));
  }, []), S = w(() => {
    const F = Se();
    u(!0), el(F).catch(l).then(() => u(!1));
  }, []), D = w((F, G) => {
    const U = Se();
    return u(!0), tl(U, F, G).catch(l).then((j) => {
      u(!1), g(j ?? void 0);
    });
  }, []), P = w(() => {
    const F = new to("apple.com"), G = k("apple.com");
    G?.scopes && G.scopes.forEach((j) => F.addScope(j)), G?.customParameters && F.setCustomParameters(G.customParameters);
    const U = Se();
    C(U, F);
  }, [C, k]), R = w(() => {
    const F = new nl(), G = k("facebook.com");
    G?.scopes && G.scopes.forEach((j) => F.addScope(j)), G?.customParameters && F.setCustomParameters(G.customParameters);
    const U = Se();
    C(U, F);
  }, [C, k]), $ = w(() => {
    const F = new rl(), G = k("github.com");
    G?.scopes && G.scopes.forEach((j) => F.addScope(j)), G?.customParameters && F.setCustomParameters(G.customParameters);
    const U = Se();
    C(U, F);
  }, [C, k]), L = w(() => {
    const F = new to("microsoft.com"), G = k("microsoft.com");
    G?.scopes && G.scopes.forEach((j) => F.addScope(j)), G?.customParameters && F.setCustomParameters(G.customParameters);
    const U = Se();
    C(U, F);
  }, [C, k]), K = w(() => {
    const F = new ol(), G = k("twitter.com");
    G?.customParameters && F.setCustomParameters(G.customParameters);
    const U = Se();
    C(U, F);
  }, [C, k]), V = w((F, G) => {
    const U = Se();
    u(!0), il(U, F, G).catch(l).then(() => u(!1));
  }, []), W = w((F, G) => {
    const U = Se();
    u(!0), al(U, F, G).catch(l).then(() => u(!1));
  }, []), O = w((F) => {
    const G = Se();
    return u(!0), sl(G, F).then((U) => (u(!1), U));
  }, []);
  return {
    user: r ?? null,
    authError: a,
    authProviderError: s,
    authLoading: A,
    initialLoading: c,
    confirmationResult: f,
    signOut: y,
    loginSkipped: p,
    skipLogin: b,
    googleLogin: I,
    anonymousLogin: S,
    appleLogin: P,
    facebookLogin: R,
    githubLogin: $,
    microsoftLogin: L,
    twitterLogin: K,
    emailPasswordLogin: V,
    phoneLogin: D,
    fetchSignInMethodsForEmail: O,
    createUserWithEmailAndPassword: W,
    extra: m,
    setExtra: v
  };
};
function ku(e) {
  if (!e)
    return e;
  const t = e.toDate();
  return t.setHours(0, 0, 0, 0), vr.fromDate(t);
}
function Iu({
  firebaseApp: e,
  textSearchController: t,
  fields: r
}) {
  const i = w((l, c, d) => {
    const A = vt(l.data()), u = l.data() ? d.properties ? _c(A, d.properties) : l.data() : void 0;
    return {
      id: l.id,
      path: Sa(l.ref.path),
      values: u
    };
  }, []), a = w((l, c, d, A, u, p) => {
    if (!e)
      throw Error("useFirestoreDataSource Firebase not initialised");
    const h = Ke(e), f = Qt(h, l), g = [];
    return c && Object.entries(c).filter(([m, v]) => !!v).forEach(([m, v]) => {
      const [b, x] = v;
      g.push(oo(m, b, hn(x, h)));
    }), c && d && A && Object.entries(c).forEach(([m, v]) => {
      m !== d && g.push(io(m, "asc"));
    }), d && A && g.push(io(d, A)), u && g.push(cl(u)), p && g.push(dl(p)), ao(f, ...g);
  }, [e]), o = w((l, c, d) => {
    if (!e)
      throw Error("useFirestoreDataSource Firebase not initialised");
    const A = Ke(e);
    return Al(lt(A, l, c)).then((u) => {
      if (!u.exists())
        return;
      const p = ke({
        collection: d,
        path: l,
        entityId: u.id,
        values: vt(u.data()),
        fields: r
      });
      return i(u, l, p);
    });
  }, [e]), s = w(async (l, c, d) => {
    if (!t)
      throw Error("Trying to make text search without specifying a FirestoreTextSearchController");
    const A = await t({
      path: l,
      searchString: c
    });
    if (A === void 0)
      throw Error("The current path is not supported by the specified FirestoreTextSearchController");
    const u = A.map(
      async (p) => {
        try {
          return await o(l, p, d);
        } catch (h) {
          console.error(h);
          return;
        }
      }
    );
    return Promise.all(u).then((p) => p.filter((h) => h !== void 0 && h.values));
  }, [o]);
  return {
    fetchCollection: w(({
      path: l,
      collection: c,
      filter: d,
      limit: A,
      startAfter: u,
      searchString: p,
      orderBy: h,
      order: f
    }) => {
      if (p)
        return s(l, p, c);
      console.debug("Fetching collection", l, A, d, u, h, f);
      const g = a(l, d, h, f, u, A);
      return so(g).then((m) => m.docs.map((v) => {
        const b = ke({
          collection: c,
          path: l,
          values: vt(v.data()),
          fields: r
        });
        return i(v, l, b);
      }));
    }, [a, s]),
    listenCollection: w(({
      path: l,
      collection: c,
      filter: d,
      limit: A,
      startAfter: u,
      searchString: p,
      orderBy: h,
      order: f,
      onUpdate: g,
      onError: m
    }) => {
      console.debug("Listening collection", l, A, d, u, h, f);
      const v = a(l, d, h, f, u, A);
      if (p)
        return s(l, p, c).then(g).catch((x) => {
          m && m(x);
        }), () => {
        };
      const b = ke({
        collection: c,
        path: l,
        fields: r
      });
      return lo(
        v,
        {
          next: (x) => {
            g(x.docs.map((y) => i(y, l, b)));
          },
          error: m
        }
      );
    }, [a, s]),
    fetchEntity: w(({
      path: l,
      entityId: c,
      collection: d
    }) => o(l, c, d), [o]),
    listenEntity: w(({
      path: l,
      entityId: c,
      collection: d,
      onUpdate: A,
      onError: u
    }) => {
      if (!e)
        throw Error("useFirestoreDataSource Firebase not initialised");
      const p = Ke(e);
      return lo(
        lt(p, l, c),
        {
          next: (h) => {
            const f = ke({
              collection: d,
              path: l,
              entityId: h.id,
              fields: r
            });
            A(i(h, l, f));
          },
          error: u
        }
      );
    }, [e]),
    saveEntity: w(({
      path: l,
      entityId: c,
      values: d,
      collection: A,
      status: u
    }) => {
      if (!e)
        throw Error("useFirestoreDataSource Firebase not initialised");
      const p = Ke(e), f = ke({
        collection: A,
        path: l,
        entityId: c,
        fields: r
      }).properties, g = Qt(p, l), m = hn(d, p), v = Hc(
        {
          inputValues: m,
          properties: f,
          status: u,
          timestampNowValue: wi(),
          setDateToMidnight: ku
        }
      );
      console.debug("Saving entity", l, c, v);
      let b;
      return c ? b = lt(g, c) : b = lt(g), ul(b, v, { merge: !0 }).then(() => ({
        id: b.id,
        path: l,
        values: vt(v)
      }));
    }, [e]),
    deleteEntity: w(({
      entity: l
    }) => {
      if (!e)
        throw Error("useFirestoreDataSource Firebase not initialised");
      const c = Ke(e);
      return fl(lt(c, l.path, l.id));
    }, [e]),
    checkUniqueField: w((l, c, d, A, u) => {
      if (!e)
        throw Error("useFirestoreDataSource Firebase not initialised");
      const p = Ke(e);
      if (console.debug("Check unique field entity", l, c, d, u), A.dataType === "array" && console.error("checkUniqueField received an array"), d == null)
        return Promise.resolve(!0);
      const h = ao(Qt(p, l), oo(c, "==", d));
      return so(h).then(
        (f) => f.docs.filter((g) => g.id !== u).length === 0
      );
    }, [e]),
    generateEntityId: w((l) => {
      if (!e)
        throw Error("useFirestoreDataSource Firebase not initialised");
      const c = Ke(e);
      return lt(Qt(c, l)).id;
    }, [e]),
    countEntities: w(async (l) => {
      if (!e)
        throw Error("useFirestoreDataSource Firebase not initialised");
      const c = Ke(e), d = Qt(c, l);
      return (await gl(d)).data().count;
    }, [e])
  };
}
function vt(e) {
  if (e === null)
    return e;
  if (wi().isEqual(e))
    return null;
  if (e instanceof vr || typeof e.toDate == "function")
    return e.toDate();
  if (e instanceof Date)
    return e;
  if (e instanceof dn)
    return new dn(e.latitude, e.longitude);
  if (e instanceof hl)
    return new ut(e.id, Sa(e.path));
  if (Array.isArray(e))
    return e.map(vt);
  if (typeof e == "object") {
    const t = {};
    for (const r of Object.keys(e))
      t[r] = vt(e[r]);
    return t;
  }
  return e;
}
function hn(e, t) {
  return Array.isArray(e) ? e.map((r) => hn(r, t)) : e instanceof ut ? lt(t, e.path, e.id) : e instanceof dn ? new pl(e.latitude, e.longitude) : e instanceof Date ? vr.fromDate(e) : e && typeof e == "object" ? Object.entries(e).map(([r, i]) => ({ [r]: hn(i, t) })).reduce((r, i) => ({ ...r, ...i }), {}) : e;
}
function Sa(e) {
  let t = e.lastIndexOf("/");
  return t = t === -1 ? e.length : t, e.substring(0, t);
}
function Su({ firebaseApp: e }) {
  const [t, r] = M();
  z(() => {
    if (e)
      try {
        r(ml(e));
      } catch (a) {
        console.error("Could not set storage.", a), r(void 0);
      }
  }, [e]);
  const i = {};
  return {
    uploadFile({ file: a, fileName: o, path: s, metadata: l }) {
      if (!t)
        throw Error("useFirebaseStorageSource Firebase not initialised");
      const c = o ?? a.name;
      return console.debug("Uploading file", c, a, s, l), bl(co(t, `${s}/${c}`), a, l).then((d) => ({
        path: d.ref.fullPath
      }));
    },
    async getDownloadURL(a) {
      if (!t)
        throw Error("useFirebaseStorageSource Firebase not initialised");
      if (i[a])
        return i[a];
      const o = co(t, a), [s, l] = await Promise.all([wl(o), vl(o)]), c = {
        url: s,
        metadata: l
      };
      return i[a] = c, c;
    }
  };
}
function Fu({
  authController: e,
  authentication: t,
  storageSource: r,
  dataSource: i
}) {
  const a = Boolean(t), [o, s] = M(a), [l, c] = M(!1), [d, A] = M(!a), u = d && (!a || Boolean(e.user) || Boolean(e.loginSkipped)) && !l;
  z(() => {
    e.loginSkipped && A(!0);
  }, [e.loginSkipped]);
  const p = he(), h = w(async () => {
    if (e.initialLoading)
      return;
    if (!e.user) {
      p.current = void 0, s(!1), A(!1);
      return;
    }
    const f = e.user;
    if (t instanceof Function && f && !Ae(p.current, f)) {
      s(!0);
      try {
        await t({
          user: f,
          authController: e,
          dataSource: i,
          storageSource: r
        }) || (e.signOut(), c(!0));
      } catch (g) {
        c(g), e.signOut();
      }
      s(!1), A(!0), p.current = f;
    } else
      s(!1);
    !e.initialLoading && !f && A(!0);
  }, [e, t, i, r]);
  return z(() => {
    h();
  }, [h]), {
    canAccessMainView: u,
    authLoading: a && o,
    notAllowedError: l,
    authVerified: d
  };
}
const Ru = `It seems like the provided Firebase config is not correct. If you 
are using the credentials provided automatically by Firebase 
Hosting, make sure you link your Firebase app to Firebase Hosting. 
`;
function Du({
  firebaseConfig: e,
  onFirebaseInit: t,
  name: r
}) {
  const [i, a] = Q.useState(), [o, s] = Q.useState(!1), [l, c] = Q.useState(), d = w((A) => {
    try {
      const u = El(A, r ?? "[DEFAULT]");
      c(void 0), s(!1), t && t(A), a(u);
    } catch (u) {
      console.error("Error initialising Firebase", u), c(Ru + `
` + (u.message ?? JSON.stringify(u)));
    }
  }, [r, t]);
  return z(() => {
    s(!0), e ? d(e) : process.env.NODE_ENV === "production" ? fetch("/__/firebase/init.json").then(async (A) => {
      if (console.debug("Firebase init response", A.status), A && A.status < 300) {
        const u = await A.json();
        d(u);
      }
    }).catch(
      (A) => {
        s(!1), c(
          "Could not load Firebase configuration from Firebase hosting. If the app is not deployed in Firebase hosting, you need to specify the configuration manually" + A.toString()
        );
      }
    ) : (s(!1), c(
      "You need to deploy the app to Firebase hosting or specify a Firebase configuration object"
    ));
  }, [e, d]), {
    firebaseApp: i,
    firebaseConfigLoading: o,
    configError: l
  };
}
const Qu = (e) => /* @__PURE__ */ n(Z, { children: /* @__PURE__ */ E(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64",
    width: 32,
    height: 32,
    children: [
      /* @__PURE__ */ E(
        "linearGradient",
        {
          id: "95yY7w43Oj6n2vH63j6HJb",
          x1: "29.401",
          x2: "29.401",
          y1: "4.064",
          y2: "106.734",
          gradientTransform: "matrix(1 0 0 -1 0 66)",
          gradientUnits: "userSpaceOnUse",
          children: [
            /* @__PURE__ */ n("stop", { offset: "0", stopColor: "#ff5840" }),
            /* @__PURE__ */ n("stop", { offset: ".007", stopColor: "#ff5840" }),
            /* @__PURE__ */ n("stop", { offset: ".989", stopColor: "#fa528c" }),
            /* @__PURE__ */ n("stop", { offset: "1", stopColor: "#fa528c" })
          ]
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          fill: "url(#95yY7w43Oj6n2vH63j6HJb)",
          d: "M47.46,15.5l-1.37,1.48c-1.34,1.44-3.5,1.67-5.15,0.6c-2.71-1.75-6.43-3.13-11-2.37 c-4.94,0.83-9.17,3.85-11.64, 7.97l-8.03-6.08C14.99,9.82,23.2,5,32.5,5c5,0,9.94,1.56,14.27,4.46 C48.81,10.83,49.13,13.71,47.46,15.5z"
        }
      ),
      /* @__PURE__ */ E(
        "linearGradient",
        {
          id: "95yY7w43Oj6n2vH63j6HJc",
          x1: "12.148",
          x2: "12.148",
          y1: ".872",
          y2: "47.812",
          gradientTransform: "matrix(1 0 0 -1 0 66)",
          gradientUnits: "userSpaceOnUse",
          children: [
            /* @__PURE__ */ n("stop", { offset: "0", stopColor: "#feaa53" }),
            /* @__PURE__ */ n("stop", { offset: ".612", stopColor: "#ffcd49" }),
            /* @__PURE__ */ n("stop", { offset: "1", stopColor: "#ffde44" })
          ]
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          fill: "url(#95yY7w43Oj6n2vH63j6HJc)",
          d: "M16.01,30.91c-0.09,2.47,0.37,4.83,1.27,6.96l-8.21,6.05c-1.35-2.51-2.3-5.28-2.75-8.22 c-1.06-6.88,0.54-13.38, 3.95-18.6l8.03,6.08C16.93,25.47,16.1,28.11,16.01,30.91z"
        }
      ),
      /* @__PURE__ */ E(
        "linearGradient",
        {
          id: "95yY7w43Oj6n2vH63j6HJd",
          x1: "29.76",
          x2: "29.76",
          y1: "32.149",
          y2: "-6.939",
          gradientTransform: "matrix(1 0 0 -1 0 66)",
          gradientUnits: "userSpaceOnUse",
          children: [
            /* @__PURE__ */ n("stop", { offset: "0", stopColor: "#42d778" }),
            /* @__PURE__ */ n("stop", { offset: ".428", stopColor: "#3dca76" }),
            /* @__PURE__ */ n("stop", { offset: "1", stopColor: "#34b171" })
          ]
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          fill: "url(#95yY7w43Oj6n2vH63j6HJd)",
          d: "M50.45,51.28c-4.55,4.07-10.61,6.57-17.36,6.71C22.91,58.2,13.66,52.53,9.07,43.92l8.21-6.05 C19.78,43.81, 25.67,48,32.5,48c3.94,0,7.52-1.28,10.33-3.44L50.45,51.28z"
        }
      ),
      /* @__PURE__ */ E(
        "linearGradient",
        {
          id: "95yY7w43Oj6n2vH63j6HJe",
          x1: "46",
          x2: "46",
          y1: "3.638",
          y2: "35.593",
          gradientTransform: "matrix(1 0 0 -1 0 66)",
          gradientUnits: "userSpaceOnUse",
          children: [
            /* @__PURE__ */ n("stop", { offset: "0", stopColor: "#155cde" }),
            /* @__PURE__ */ n("stop", { offset: ".278", stopColor: "#1f7fe5" }),
            /* @__PURE__ */ n("stop", { offset: ".569", stopColor: "#279ceb" }),
            /* @__PURE__ */ n("stop", { offset: ".82", stopColor: "#2cafef" }),
            /* @__PURE__ */ n("stop", { offset: "1", stopColor: "#2eb5f0" })
          ]
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          fill: "url(#95yY7w43Oj6n2vH63j6HJe)",
          d: `M59,31.97c0.01,7.73-3.26,14.58-8.55,19.31l-7.62-6.72c2.1-1.61,3.77-3.71,4.84-6.15
        c0.29-0.66-0.2-1.41-0.92-1.41H37c-2.21,0-4-1.79-4-4v-2c0-2.21,1.79-4,4-4h17C56.75,27,59,29.22,59,31.97z`
        }
      )
    ]
  }
) }), Tu = (e) => /* @__PURE__ */ n(
  "svg",
  {
    width: 32,
    height: 32,
    viewBox: "0 0 56 56",
    style: { transform: "scale(2.8)" },
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ n(
      "g",
      {
        stroke: e === "light" ? "#424245" : "white",
        strokeWidth: "0.5",
        fillRule: "evenodd",
        children: /* @__PURE__ */ n(
          "path",
          {
            d: "M28.2226562,20.3846154 C29.0546875,20.3846154 30.0976562,19.8048315 30.71875,19.0317864 C31.28125,18.3312142 31.6914062,17.352829 31.6914062,16.3744437 C31.6914062,16.2415766 31.6796875,16.1087095 31.65625,16 C30.7304687,16.0362365 29.6171875,16.640178 28.9492187,17.4494596 C28.421875,18.06548 27.9414062,19.0317864 27.9414062,20.0222505 C27.9414062,20.1671964 27.9648438,20.3121424 27.9765625,20.3604577 C28.0351562,20.3725366 28.1289062,20.3846154 28.2226562,20.3846154 Z M25.2929688,35 C26.4296875,35 26.9335938,34.214876 28.3515625,34.214876 C29.7929688,34.214876 30.109375,34.9758423 31.375,34.9758423 C32.6171875,34.9758423 33.4492188,33.792117 34.234375,32.6325493 C35.1132812,31.3038779 35.4765625,29.9993643 35.5,29.9389701 C35.4179688,29.9148125 33.0390625,28.9122695 33.0390625,26.0979021 C33.0390625,23.6579784 34.9140625,22.5588048 35.0195312,22.474253 C33.7773438,20.6382708 31.890625,20.5899555 31.375,20.5899555 C29.9804688,20.5899555 28.84375,21.4596313 28.1289062,21.4596313 C27.3554688,21.4596313 26.3359375,20.6382708 25.1289062,20.6382708 C22.8320312,20.6382708 20.5,22.5950413 20.5,26.2911634 C20.5,28.5861411 21.3671875,31.013986 22.4335938,32.5842339 C23.3476562,33.9129053 24.1445312,35 25.2929688,35 Z",
            fill: e === "light" ? "#424245" : "white",
            fillRule: "nonzero"
          }
        )
      }
    )
  }
), Mu = (e) => /* @__PURE__ */ n(
  "svg",
  {
    fill: e === "light" ? "#1c1e21" : "white",
    role: "img",
    viewBox: "0 0 24 24",
    width: 28,
    height: 28,
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ n(
      "path",
      {
        d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      }
    )
  }
), Pu = (e) => /* @__PURE__ */ n(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: 28,
    height: 28,
    viewBox: "0 0 90 90",
    children: /* @__PURE__ */ n("g", { children: /* @__PURE__ */ n(
      "path",
      {
        d: "M90,15.001C90,7.119,82.884,0,75,0H15C7.116,0,0,7.119,0,15.001v59.998   C0,82.881,7.116,90,15.001,90H45V56H34V41h11v-5.844C45,25.077,52.568,16,61.875,16H74v15H61.875C60.548,31,59,32.611,59,35.024V41   h15v15H59v34h16c7.884,0,15-7.119,15-15.001V15.001z",
        fill: e === "light" ? "#39569c" : "white"
      }
    ) })
  }
), $u = (e) => /* @__PURE__ */ n(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: 28,
    height: 28,
    viewBox: "0 0 480 480",
    children: /* @__PURE__ */ n("g", { children: /* @__PURE__ */ n(
      "path",
      {
        d: "M0.176,224L0.001,67.963l192-26.072V224H0.176z M224.001,37.241L479.937,0v224H224.001V37.241z M479.999,256l-0.062,224   l-255.936-36.008V256H479.999z M192.001,439.918L0.157,413.621L0.147,256h191.854V439.918z",
        fill: e === "light" ? "#00a2ed" : "white"
      }
    ) })
  }
), Gu = (e) => /* @__PURE__ */ n(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ n(
      "path",
      {
        fill: e === "light" ? "#00acee" : "white",
        d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
      }
    )
  }
), Fa = "recaptcha-container";
function Ou() {
  return z(() => {
    if (!window || window?.recaptchaVerifier)
      return;
    const e = Se();
    window.recaptchaVerifier = new bi(
      Fa,
      {
        size: "invisible"
      },
      e
    );
  }, []), null;
}
function Lu({
  allowSkipLogin: e,
  logo: t,
  signInOptions: r,
  firebaseApp: i,
  authController: a,
  noUserComponent: o,
  disableSignupScreen: s = !1,
  disabled: l = !1,
  additionalComponent: c,
  notAllowedError: d
}) {
  const A = kr(), [u, p] = M(!1), [h, f] = M(!1), g = r.map((y) => typeof y == "object" ? y.provider : y), m = w(() => {
    const y = Se(), k = new bi("recaptcha", { size: "invisible" }, y), I = ll(y, a.authProviderError);
    if (I.hints[0].factorId === no.FACTOR_ID) {
      const C = {
        multiFactorHint: I.hints[0],
        session: I.session
      };
      new ro(y).verifyPhoneNumber(C, k).then(function(D) {
        const P = String(window.prompt("Please enter the verification code that was sent to your mobile device.")), R = ro.credential(D, P), $ = no.assertion(R);
        return I.resolveSignIn($);
      });
    } else
      console.warn("Unsupported second factor.");
  }, [a.authProviderError]);
  function v() {
    let y;
    if (a.user != null)
      return y;
    const k = ["auth/popup-closed-by-user", "auth/cancelled-popup-request"];
    return a.authProviderError && (a.authProviderError.code === "auth/operation-not-allowed" || a.authProviderError.code === "auth/configuration-not-found" ? y = /* @__PURE__ */ E("div", { children: [
      /* @__PURE__ */ n(B, { p: 1, children: /* @__PURE__ */ n(
        xe,
        {
          error: "You need to enable Firebase auth and the corresponding login provider in your Firebase project"
        }
      ) }),
      i && /* @__PURE__ */ n(B, { p: 1, children: /* @__PURE__ */ n(
        "a",
        {
          href: `https://console.firebase.google.com/project/${i.options.projectId}/authentication/providers`,
          rel: "noopener noreferrer",
          target: "_blank",
          children: /* @__PURE__ */ n(
            ae,
            {
              variant: "text",
              color: "primary",
              children: "Open Firebase configuration"
            }
          )
        }
      ) })
    ] }) : k.includes(a.authProviderError.code) || (a.authProviderError.code === "auth/multi-factor-auth-required" && m(), y = /* @__PURE__ */ n(B, { p: 1, children: /* @__PURE__ */ n(xe, { error: a.authProviderError }) }))), y;
  }
  let b;
  t ? b = /* @__PURE__ */ n(
    "img",
    {
      src: t,
      style: {
        height: "100%",
        width: "100%",
        objectFit: "cover"
      },
      alt: "Logo"
    }
  ) : b = /* @__PURE__ */ n(ka, {});
  let x;
  return d && (typeof d == "string" ? x = d : d instanceof Error ? x = d.message : x = "It looks like you don't have access to the CMS, based on the specified Authenticator configuration"), /* @__PURE__ */ n(
    ri,
    {
      in: !0,
      timeout: 800,
      mountOnEnter: !0,
      unmountOnExit: !0,
      children: /* @__PURE__ */ E(B, { sx: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        p: 2
      }, children: [
        /* @__PURE__ */ n("div", { id: "recaptcha" }),
        /* @__PURE__ */ E(B, { sx: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: 380
        }, children: [
          /* @__PURE__ */ n(B, { m: 1, sx: {
            padding: 1,
            width: 260,
            height: 260
          }, children: b }),
          x && /* @__PURE__ */ n(B, { p: 2, children: /* @__PURE__ */ n(xe, { error: x }) }),
          v(),
          !u && !h && /* @__PURE__ */ E(Z, { children: [
            Ra(a, g, A.mode, l),
            g.includes("password") && /* @__PURE__ */ n(
              He,
              {
                disabled: l,
                text: "Email/password",
                icon: /* @__PURE__ */ n(si, { fontSize: "large" }),
                onClick: () => p(!0)
              }
            ),
            g.includes("phone") && /* @__PURE__ */ n(
              He,
              {
                disabled: l,
                text: "Phone number",
                icon: /* @__PURE__ */ n(ys, { fontSize: "large" }),
                onClick: () => f(!0)
              }
            ),
            g.includes("anonymous") && /* @__PURE__ */ n(
              He,
              {
                disabled: l,
                text: "Log in anonymously",
                icon: /* @__PURE__ */ n(
                  xl,
                  {
                    fontSize: "large"
                  }
                ),
                onClick: a.anonymousLogin
              }
            ),
            e && /* @__PURE__ */ n(B, { m: 1, children: /* @__PURE__ */ n(
              ae,
              {
                disabled: l,
                onClick: a.skipLogin,
                children: "Skip login"
              }
            ) })
          ] }),
          u && /* @__PURE__ */ n(
            Vu,
            {
              authController: a,
              onClose: () => p(!1),
              mode: A.mode,
              noUserComponent: o,
              disableSignupScreen: s
            }
          ),
          h && /* @__PURE__ */ n(
            Yu,
            {
              authController: a,
              onClose: () => f(!1)
            }
          ),
          !u && !h && c
        ] })
      ] })
    }
  );
}
function He({
  icon: e,
  onClick: t,
  text: r,
  disabled: i
}) {
  return /* @__PURE__ */ n(B, { m: 0.5, width: "100%", children: /* @__PURE__ */ n(
    ae,
    {
      fullWidth: !0,
      variant: "outlined",
      disabled: i,
      onClick: t,
      children: /* @__PURE__ */ E(B, { sx: {
        p: "1",
        display: "flex",
        width: "240px",
        height: "32px",
        alignItems: "center",
        justifyItems: "center"
      }, children: [
        /* @__PURE__ */ n(B, { sx: {
          display: "flex",
          flexDirection: "column",
          width: "32px",
          alignItems: "center",
          justifyItems: "center"
        }, children: e }),
        /* @__PURE__ */ n(B, { sx: {
          flexGrow: 1,
          pl: 2,
          textAlign: "center"
        }, children: r })
      ] })
    }
  ) });
}
function Yu({
  onClose: e,
  authController: t
}) {
  Ou();
  const [r, i] = M(), [a, o] = M(), [s, l] = M(!1);
  return /* @__PURE__ */ E("form", { onSubmit: async (d) => {
    d.preventDefault(), a && t.confirmationResult ? (l(!1), t.confirmationResult.confirm(a).catch((A) => {
      A.code === "auth/invalid-verification-code" && l(!0);
    })) : r && t.phoneLogin(r, window.recaptchaVerifier);
  }, children: [
    s && /* @__PURE__ */ n(B, { p: 2, children: /* @__PURE__ */ n(xe, { error: "Invalid confirmation code" }) }),
    /* @__PURE__ */ n("div", { id: Fa }),
    /* @__PURE__ */ E(oe, { container: !0, spacing: 1, children: [
      /* @__PURE__ */ n(oe, { item: !0, xs: 12, children: /* @__PURE__ */ n(
        ne,
        {
          onClick: e,
          children: /* @__PURE__ */ n(qn, { sx: { width: 20, height: 20 } })
        }
      ) }),
      /* @__PURE__ */ n(oe, { item: !0, xs: 12, sx: {
        p: 1,
        display: "flex"
      }, children: /* @__PURE__ */ n(
        X,
        {
          align: "center",
          variant: "subtitle2",
          children: "Please enter your phone number"
        }
      ) }),
      /* @__PURE__ */ n(oe, { item: !0, xs: 12, children: /* @__PURE__ */ n(
        nt,
        {
          placeholder: "",
          fullWidth: !0,
          value: r,
          disabled: Boolean(r && (t.authLoading || t.confirmationResult)),
          type: "phone",
          required: !0,
          onChange: (d) => i(d.target.value)
        }
      ) }),
      Boolean(r && t.confirmationResult) && /* @__PURE__ */ E(Z, { children: [
        /* @__PURE__ */ n(oe, { item: !0, xs: 12, sx: {
          mt: 2,
          p: 1,
          display: "flex"
        }, children: /* @__PURE__ */ n(
          X,
          {
            align: "center",
            variant: "subtitle2",
            children: "Please enter the confirmation code"
          }
        ) }),
        /* @__PURE__ */ n(oe, { item: !0, xs: 12, children: /* @__PURE__ */ n(
          nt,
          {
            placeholder: "",
            fullWidth: !0,
            value: a,
            type: "text",
            required: !0,
            onChange: (d) => o(d.target.value)
          }
        ) })
      ] }),
      /* @__PURE__ */ n(oe, { item: !0, xs: 12, children: /* @__PURE__ */ E(B, { sx: {
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        width: "100%"
      }, children: [
        t.authLoading && /* @__PURE__ */ n(
          dt,
          {
            sx: { p: 1 },
            size: 16,
            thickness: 8
          }
        ),
        /* @__PURE__ */ n(ae, { type: "submit", children: "Ok" })
      ] }) })
    ] })
  ] });
}
function Vu({
  onClose: e,
  authController: t,
  mode: r,
  noUserComponent: i,
  disableSignupScreen: a
}) {
  const o = he(null), [s, l] = M(), [c, d] = M(), [A, u] = M(), p = c === void 0, h = c && c.includes("password"), f = c && !c.includes("password") && c.length > 0, g = c && !c.includes("password");
  z(() => {
    (h || g) && o.current && o.current.focus();
  }, [h, g]), z(() => {
    if (!document)
      return;
    const C = (S) => {
      S.keyCode === 27 && e();
    };
    return document.addEventListener("keydown", C, !1), () => {
      document.removeEventListener("keydown", C, !1);
    };
  }, [e]);
  function m() {
    s && t.fetchSignInMethodsForEmail(s).then((C) => {
      d(C);
    });
  }
  function v() {
    s && A && t.emailPasswordLogin(s, A);
  }
  function b() {
    s && A && t.createUserWithEmailAndPassword(s, A);
  }
  const x = () => {
    p ? e() : d(void 0);
  }, y = (C) => {
    C.preventDefault(), p ? m() : h ? v() : g && b();
  }, k = g ? "No user found with that email. Pick a password to create a new account" : h ? "Please enter your password" : "Please enter your email", I = g ? "Create account" : h ? "Login" : "Ok";
  return f ? /* @__PURE__ */ E(oe, { container: !0, spacing: 1, children: [
    /* @__PURE__ */ n(oe, { item: !0, xs: 12, children: /* @__PURE__ */ n(
      ne,
      {
        onClick: x,
        children: /* @__PURE__ */ n(qn, { sx: { width: 20, height: 20 } })
      }
    ) }),
    /* @__PURE__ */ E(oe, { item: !0, xs: 12, sx: { p: 1 }, children: [
      /* @__PURE__ */ n(X, { align: "center", variant: "subtitle2", children: "You already have an account" }),
      /* @__PURE__ */ E(X, { align: "center", variant: "body2", children: [
        "You can use one of these methods to login with ",
        s
      ] })
    ] }),
    /* @__PURE__ */ n(oe, { item: !0, xs: 12, children: c && Ra(t, c, r, !1) })
  ] }) : /* @__PURE__ */ n(
    Ar,
    {
      direction: "up",
      in: !0,
      mountOnEnter: !0,
      unmountOnExit: !0,
      children: /* @__PURE__ */ n("form", { onSubmit: y, children: /* @__PURE__ */ E(oe, { container: !0, spacing: 1, children: [
        /* @__PURE__ */ n(oe, { item: !0, xs: 12, children: /* @__PURE__ */ n(
          ne,
          {
            onClick: x,
            children: /* @__PURE__ */ n(qn, { sx: { width: 20, height: 20 } })
          }
        ) }),
        /* @__PURE__ */ n(oe, { item: !0, xs: 12, sx: {
          p: 1,
          display: g && a ? "none" : "flex"
        }, children: /* @__PURE__ */ n(
          X,
          {
            align: "center",
            variant: "subtitle2",
            children: k
          }
        ) }),
        /* @__PURE__ */ n(
          oe,
          {
            item: !0,
            xs: 12,
            sx: { display: p ? "inherit" : "none" },
            children: /* @__PURE__ */ n(
              nt,
              {
                placeholder: "Email",
                fullWidth: !0,
                autoFocus: !0,
                value: s ?? "",
                disabled: t.authLoading,
                type: "email",
                onChange: (C) => l(C.target.value)
              }
            )
          }
        ),
        /* @__PURE__ */ n(oe, { item: !0, xs: 12, children: g && i }),
        /* @__PURE__ */ n(
          oe,
          {
            item: !0,
            xs: 12,
            sx: { display: h || g && !a ? "inherit" : "none" },
            children: /* @__PURE__ */ n(
              nt,
              {
                placeholder: "Password",
                fullWidth: !0,
                value: A ?? "",
                disabled: t.authLoading,
                inputRef: o,
                type: "password",
                onChange: (C) => u(C.target.value)
              }
            )
          }
        ),
        /* @__PURE__ */ n(oe, { item: !0, xs: 12, children: /* @__PURE__ */ E(B, { sx: {
          display: g && a ? "none" : "flex",
          justifyContent: "end",
          alignItems: "center",
          width: "100%"
        }, children: [
          t.authLoading && /* @__PURE__ */ n(
            dt,
            {
              sx: { p: 1 },
              size: 16,
              thickness: 8
            }
          ),
          /* @__PURE__ */ n(ae, { type: "submit", children: I })
        ] }) })
      ] }) })
    }
  );
}
function Ra(e, t, r, i) {
  return /* @__PURE__ */ E(Z, { children: [
    t.includes("google.com") && /* @__PURE__ */ n(
      He,
      {
        disabled: i,
        text: "Sign in with Google",
        icon: Qu(),
        onClick: e.googleLogin
      }
    ),
    t.includes("microsoft.com") && /* @__PURE__ */ n(
      He,
      {
        disabled: i,
        text: "Sign in with Microsoft",
        icon: $u(r),
        onClick: e.microsoftLogin
      }
    ),
    t.includes("apple.com") && /* @__PURE__ */ n(
      He,
      {
        disabled: i,
        text: "Sign in with Apple",
        icon: Tu(r),
        onClick: e.appleLogin
      }
    ),
    t.includes("github.com") && /* @__PURE__ */ n(
      He,
      {
        disabled: i,
        text: "Sign in with Github",
        icon: Mu(r),
        onClick: e.githubLogin
      }
    ),
    t.includes("facebook.com") && /* @__PURE__ */ n(
      He,
      {
        disabled: i,
        text: "Sign in with Facebook",
        icon: Pu(r),
        onClick: e.facebookLogin
      }
    ),
    t.includes("twitter.com") && /* @__PURE__ */ n(
      He,
      {
        disabled: i,
        text: "Sign in with Twitter",
        icon: Gu(r),
        onClick: e.twitterLogin
      }
    )
  ] });
}
const _o = [
  mi.PROVIDER_ID
];
function ah({
  name: e,
  logo: t,
  logoDark: r,
  toolbarExtraWidget: i,
  authentication: a,
  collectionOverrideHandler: o,
  collections: s,
  views: l,
  textSearchController: c,
  allowSkipLogin: d,
  signInOptions: A = _o,
  firebaseConfig: u,
  onFirebaseInit: p,
  primaryColor: h,
  secondaryColor: f,
  fontFamily: g,
  dateTimeFormat: m,
  locale: v,
  HomePage: b,
  basePath: x,
  baseCollectionPath: y,
  LoginView: k,
  onAnalyticsEvent: I,
  fields: C
}) {
  dc(e, t);
  const {
    firebaseApp: S,
    firebaseConfigLoading: D,
    configError: P
  } = Du({
    onFirebaseInit: p,
    firebaseConfig: u
  }), R = Cu({
    firebaseApp: S,
    signInOptions: A
  }), $ = Eu(), L = Iu({
    firebaseApp: S,
    textSearchController: c,
    fields: C
  }), K = Su({
    firebaseApp: S
  }), {
    authLoading: V,
    canAccessMainView: W,
    notAllowedError: O
  } = Fu({
    authController: R,
    authentication: a,
    dataSource: L,
    storageSource: K
  }), F = xu(), G = ie(() => vu({
    mode: F.mode,
    primaryColor: h,
    secondaryColor: f,
    fontFamily: g
  }), [g, F.mode, h, f]);
  return P ? /* @__PURE__ */ n(cr, { fullScreen: !0, children: P }) : D || !S ? /* @__PURE__ */ E(Z, { children: [
    /* @__PURE__ */ n(Jr, {}),
    /* @__PURE__ */ n(kt, {})
  ] }) : /* @__PURE__ */ n(fs, { basename: x, children: /* @__PURE__ */ n(Bu, { children: /* @__PURE__ */ n(
    nc,
    {
      value: F,
      children: /* @__PURE__ */ n(
        uu,
        {
          collections: s,
          views: l,
          authController: R,
          userConfigPersistence: $,
          collectionOverrideHandler: o,
          dateTimeFormat: m,
          dataSource: L,
          storageSource: K,
          entityLinkBuilder: ({ entity: U }) => `https://console.firebase.google.com/project/${S.options.projectId}/firestore/data/${U.path}/${U.id}`,
          locale: v,
          basePath: x,
          baseCollectionPath: y,
          onAnalyticsEvent: I,
          fields: C,
          children: ({ context: U, loading: j }) => {
            let se;
            if (j || V)
              se = /* @__PURE__ */ n(kt, {});
            else {
              const _ = F.mode === "dark" && r ? r : t;
              W ? se = /* @__PURE__ */ E(
                pu,
                {
                  name: e,
                  logo: _,
                  toolbarExtraWidget: i,
                  children: [
                    /* @__PURE__ */ n(
                      yu,
                      {
                        HomePage: b
                      }
                    ),
                    /* @__PURE__ */ n(OA, {})
                  ]
                }
              ) : se = /* @__PURE__ */ n(
                k ?? Lu,
                {
                  logo: _,
                  allowSkipLogin: d,
                  signInOptions: A ?? _o,
                  firebaseApp: S,
                  authController: R,
                  notAllowedError: O
                }
              );
            }
            return /* @__PURE__ */ E(ds, { theme: G, children: [
              /* @__PURE__ */ n(Jr, {}),
              se
            ] });
          }
        }
      )
    }
  ) }) });
}
function sh(e, t) {
  return console.debug("Performing Algolia query", e, t), e.search(t).then(({ hits: r }) => r.map((i) => i.objectID)).catch((r) => (console.log(r), []));
}
export {
  Mr as ArrayContainer,
  Rr as ArrayEnumPreview,
  So as ArrayEnumSelectBinding,
  hc as ArrayOfMapsPreview,
  ed as ArrayOfReferencesFieldBinding,
  wc as ArrayOfReferencesPreview,
  bc as ArrayOfStorageComponentsPreview,
  gc as ArrayOfStringsPreview,
  xc as ArrayOneOfPreview,
  po as ArrayPropertyEnumPreview,
  bo as ArrayPropertyPreview,
  Pg as AsyncPreviewComponent,
  hd as BlockFieldBinding,
  Yc as BooleanPreview,
  Jg as BreadcrumbUpdater,
  qc as COLLECTION_PATH_SEPARATOR,
  cr as CenteredView,
  kt as CircularProgressCenter,
  Vi as ColorChip,
  gt as CustomDialogActions,
  Gd as DEFAULT_FIELD_CONFIGS,
  Mc as DatePreview,
  ld as DateTimeFieldBinding,
  zg as DebouncedTextField,
  Zg as DeleteConfirmationDialog,
  gu as Drawer,
  Uo as DrawerNavigationItem,
  Tt as EmptyValue,
  pa as EntityCollectionTable,
  Ba as EntityCollectionView,
  Md as EntityForm,
  ua as EntityPreview,
  ut as EntityReference,
  Le as EnumValuesChip,
  ue as ErrorBoundary,
  xe as ErrorView,
  Zt as ExpandablePanel,
  De as FieldDescription,
  FA as FilledMenuItem,
  SA as FilledSelect,
  uu as FireCMS,
  $i as FireCMSContextInstance,
  eu as FireCMSHomePage,
  ka as FireCMSLogo,
  ah as FirebaseCMSApp,
  Lu as FirebaseLoginView,
  dn as GeoPoint,
  Pc as ImagePreview,
  Qe as LabelWithIcon,
  He as LoginButton,
  fd as MapFieldBinding,
  vc as MapPropertyPreview,
  Qr as Markdown,
  bd as MarkdownFieldBinding,
  nc as ModeControllerProvider,
  KA as NavigationCollectionCard,
  zo as NavigationGroup,
  yu as NavigationRoutes,
  tu as NotFoundPage,
  pc as NumberPropertyPreview,
  Rt as PropertyFieldBinding,
  Re as PropertyPreview,
  ta as ReadOnlyFieldBinding,
  cd as ReferenceFieldBinding,
  Lt as ReferencePreview,
  qA as ReferenceSelectionView,
  gd as RepeatFieldBinding,
  dr as RouteWrapper,
  pu as Scaffold,
  Io as SelectFieldBinding,
  OA as SideDialogs,
  Et as SkeletonPropertyComponent,
  Bu as SnackbarProvider,
  $c as StorageThumbnail,
  Oc as StorageThumbnailInternal,
  Qo as StorageUploadFieldBinding,
  Wi as StringPropertyPreview,
  Ug as SwitchControl,
  sd as SwitchFieldBinding,
  Mt as TextFieldBinding,
  Kn as UrlComponentPreview,
  BA as VirtualTable,
  Dg as addInitialSlash,
  oh as buildAdditionalFieldDelegate,
  qg as buildCollection,
  rh as buildEntityCallbacks,
  nh as buildEnumValueConfig,
  th as buildEnumValues,
  ih as buildFieldConfig,
  Kg as buildProperties,
  eh as buildPropertiesOrBuilder,
  Xg as buildProperty,
  Or as canCreateEntity,
  da as canDeleteEntity,
  ca as canEditEntity,
  hn as cmsToFirestoreModel,
  Po as collectionIconKeys,
  vu as createCMSDefaultTheme,
  ac as deleteEntityWithCallbacks,
  vt as firestoreToCMSModel,
  tt as fullPathToCollectionSegments,
  jg as getBadgeForWidget,
  Er as getCollectionByPathOrAlias,
  Ii as getCollectionPathsCombinations,
  Ng as getColorForProperty,
  fn as getDefaultValuesFor,
  Pr as getFieldConfig,
  Od as getFieldId,
  _i as getFistAdditionalView,
  xo as getHashValue,
  Mo as getIcon,
  $r as getIconForProperty,
  or as getIconForView,
  Yd as getIdIcon,
  Qg as getLastSegment,
  sa as getPropertyInPath,
  gn as getReferenceFrom,
  Aa as getReferencePreviewKeys,
  la as getResolvedPropertyInPath,
  Bt as getValueInPath,
  Kc as hydrateRegExp,
  Bo as isEmptyObject,
  Tr as isHidden,
  Ln as isObject,
  ot as isPropertyBuilder,
  Jt as isReadOnly,
  Ld as isReferenceProperty,
  Wg as isValidRegExp,
  Gg as joinCollectionLists,
  Ni as mergeCollections,
  Ze as mergeDeep,
  sh as performAlgoliaTextSearch,
  jc as pick,
  Hg as plural,
  Yg as randomColor,
  Yt as randomString,
  yo as removeFunctions,
  $g as removeInPath,
  Ce as removeInitialAndTrailingSlashes,
  rc as removeInitialSlash,
  oc as removeTrailingSlash,
  Eo as removeUndefined,
  Mg as renderSkeletonCaptionText,
  Ui as renderSkeletonIcon,
  zi as renderSkeletonImageThumbnail,
  _e as renderSkeletonText,
  ft as resolveArrayProperty,
  ke as resolveCollection,
  ki as resolveCollectionPathAliases,
  xn as resolveEnumValues,
  sc as resolveNavigationFrom,
  Gr as resolvePermissions,
  oa as resolveProperties,
  $e as resolveProperty,
  ia as resolvePropertyEnum,
  _c as sanitizeData,
  Gi as saveEntityWithCallbacks,
  Xc as segmentsToStrippedPath,
  Vg as serializeRegExp,
  _g as singular,
  Hi as sortProperties,
  Co as stripCollectionPath,
  Og as toKebabCase,
  Lg as toSnakeCase,
  er as traverseValueProperty,
  ji as traverseValuesProperties,
  Hc as updateDateAutoValues,
  Ft as useAuthController,
  Ir as useBreadcrumbsContext,
  dc as useBrowserTitleAndIcon,
  Eu as useBuildLocalConfigurationPersistence,
  xu as useBuildModeController,
  Te as useClearRestoreValue,
  lc as useClipboard,
  ic as useCollectionFetch,
  Ve as useDataSource,
  Ji as useDebounce,
  Cr as useEntityFetch,
  re as useFireCMSContext,
  Cu as useFirebaseAuthController,
  Su as useFirebaseStorageSource,
  Iu as useFirestoreDataSource,
  Du as useInitialiseFirebase,
  kr as useModeController,
  Ie as useNavigationContext,
  Sr as useReferenceDialog,
  Tg as useResolvedNavigationFrom,
  Ca as useSelectionController,
  Yr as useSideDialogContext,
  At as useSideEntityController,
  rt as useSnackbarController,
  _t as useStorageSource,
  Fu as useValidateAuthenticator
};
//# sourceMappingURL=index.es.js.map

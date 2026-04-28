import React, { useEffect, useMemo, useRef, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const asciiLogo = `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%##**+++**##%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#+==**--::::::::::------=+#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#=*****+:..................:**---=#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+-=#-------*=................=*-------=#+@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*---*=---------++:.............++----------*=-*@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@+--:=#===---------*=...........:++-----------=*---+@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@*-:::=#======--===---*-:........:=+------------==*-::-+@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@#--:.:-#=======--=======*::.::::::-*=======--======++::::-*@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@=-::::-#++++====--=======*=::::::::#========--=======#-:::::=@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@%-:::::-+*++++++++--========*:::::::++========--====+++++::::::-#@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@#-::::::=#+++++++++--=++++===*-:::::-#+++++++++--=+++++++#-:::::::*@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@#-::::::-*******++++--=+++++++++:::::+++++++++++--=+++++++*+::::::::*@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@%-:::::::=##*********--=++++++++*:::::#**********=-=********%:::::::::#@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@=-:::*-:-+#@#********--=****++++#::::-#**********===******#@%-::*%-:::-@@@@@@@@@@@@
@@@@@@@@@@@@@@@@+#=::::#@*+#%@%****###***********#-:::-#****#%%@@@@@@@@@@@@@@%%@@*:::+%+=@@@@@@@@@@@
@@@@@@@@@@@@@@@%---%@*=-+@@@@@@@@@@@@@@@@@@@@@%#**:::::*@@%#@=:.:@@@@@==%=*#@@@@@@@@%=::-#@@@@@@@@@@
@@@@@@@@@@@@@@@=---::=@@@@@@+:.:#:..#@@@@%+#-.:%@*:::::-@%..:%=-%@@@+-+%:..=@*-:-=::::::--@@@@@@@@@@
@@@@@@@@@@@@@@@---::::::::-%@=:.:#*===+++*#::-%@+:::::::=@@+:.:*#####*:.::#@#-:::::::::---%@@@@@@@@@
@@@@@@@@@@@@@@#:------------*@@+::..-==-..:-%@@=::::::::::+@@@+-:::::-=#@@#=-:::::::::::::*@@@@@@@@@
@@@@@@@@@@@@@@+=--------------=%@@@%###%%@@@#-:::::::::::::::-*%@@@@@@#=---:::::::--------=@@@@@@@@@
@@@@@@@@@@@@@@+====-------------::-==+==-:::::::::::::::::::::::::::::-----------=====----=@@@@@@@@@
@@@@@@@@@@@@@@+====--------------::::::::::::::::::::::::::::::::::::----------=========--=@@@@@@@@@
@@@@@@@@@@@@@@*=====--------------::::::::::::::::::::-*#%%#*=:::::::----------========---+@@@@@@@@@
@@@@@@@@@@@@@@#====---------------::::=#%######%#=-:=%*=-::==+*%+::::----------========---*@@@@@@@@@
@@@@@@@@@@@@@@@==-=--:::--------:::-%#+==++=-:.:-+*%*+=+++++++++*#*:::-----------====-----%@@@@@@@@@
@@@@@@@@@@@@@@@=---::---==+=-::::-%#*******************************#*::::----:::---------=@@@@@@@@@@
@@@@@@@@@@@@@@@#--:--++#----:::-*%#######**##%#***********#%*********%=:::==---:::-------#@@@@@@@@@@
@@@@@@@@@@@@@@@@=---=---**----#%#############%%%%######%%++%%##########*-:::-=+---------=@@@@@@@@@@@
@@@@@@@@@@@@@@@@%--------=%##############%%%*-::...::.....::=%%#########%%+==*#=+-------%@@@@@@@@@@@
@@@@@@@@@@@@@@@@@#--------+%#########%%%%+-:.........   ......:*%%%####%%%+------------*@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@*---------=+#%%%##########%%##**+-:........::=*##%%###%+------------+@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@*-------------:-*%%#####******####%%%%%%%%%#+=#%#*++++*#*---------+@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@#------------:::::-+%#####*****++++++*#%#++++*%%**+++==+%=------*@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@%=-----------::::::::+%####*******++++**#+++==+%#*+++-:+#-----%@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@*-----------:::::::::-*%#**************++++==+%*++=:.=#---+@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@=-------------::::::::-*%#***********++++===**++=--**-=%@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@%=-------------::::::::::=#%#*******++++=++*+++=+#*=%@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+-----------------:-:::----=*%%##*********#%%+=@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#=---------------------------------------=#@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%=---------------------------------=%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*-------------------------+%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%#*+==-----==+*#%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`;

function formatTime(value) {
  if (!value) return "just now";
  return new Date(value).toLocaleString(undefined, {
    month: "2-digit",
    day: "2-digit",
    year: "2-digit",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function RealityVontsAnonymous() {
  const [posts, setPosts] = useState([]);
  const [pendingPosts, setPendingPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState("feed");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [adminError, setAdminError] = useState("");
  const [session, setSession] = useState(null);
  const [picPreview, setPicPreview] = useState("");
  const [picFile, setPicFile] = useState(null);
  const [expanded, setExpanded] = useState({});
  const [openComments, setOpenComments] = useState({});
  const [commentForms, setCommentForms] = useState({});

  const headlineRef = useRef(null);
  const nameRef = useRef(null);
  const bodyRef = useRef(null);

  const approvedPosts = useMemo(() => {
    return posts.filter((post) => post.approved).sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  }, [posts]);

  const commentsByPost = useMemo(() => {
    return comments.reduce((acc, comment) => {
      if (!acc[comment.post_id]) acc[comment.post_id] = [];
      acc[comment.post_id].push(comment);
      return acc;
    }, {});
  }, [comments]);

  useEffect(() => {
    fetchAll();
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: listener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  async function fetchAll() {
    const [{ data: postData }, { data: commentData }] = await Promise.all([
      supabase.from("posts").select("*").order("created_at", { ascending: false }),
      supabase.from("comments").select("*").order("created_at", { ascending: true }),
    ]);

    if (postData) {
      setPosts(postData.filter((post) => post.approved));
      setPendingPosts(postData.filter((post) => !post.approved));
    }
    if (commentData) setComments(commentData);
  }

  function fileToDataUrl(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  async function handleFileChange(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    setPicFile(file);
    setPicPreview(await fileToDataUrl(file));
  }

  async function uploadImage(file) {
    if (!file) return "";
    const safeName = file.name.replace(/[^a-z0-9._-]/gi, "-").toLowerCase();
    const fileName = `${Date.now()}-${safeName}`;
    const { error } = await supabase.storage.from("images").upload(fileName, file, {
      cacheControl: "3600",
      upsert: false,
    });
    if (error) throw error;
    const { data } = supabase.storage.from("images").getPublicUrl(fileName);
    return data.publicUrl;
  }

  async function submitPost(event) {
    event.preventDefault();
    const headline = headlineRef.current?.value?.trim() || "";
    const name = nameRef.current?.value?.trim() || "anonymous";
    const body = bodyRef.current?.value?.trim() || "";
    if (!headline || !body) return;

    const imageUrl = await uploadImage(picFile);
const { data, error } = await supabase
  .from("posts")
  .insert([{ headline, name, body, pic: imageUrl, approved: false }])
  .select();

console.log("POST INSERT DATA:", data);
console.log("POST INSERT ERROR:", error);

if (error) {
  alert(error.message);
  return;
}
    if (headlineRef.current) headlineRef.current.value = "";
    if (nameRef.current) nameRef.current.value = "";
    if (bodyRef.current) bodyRef.current.value = "";
    setPicFile(null);
    setPicPreview("");
    setPage("feed");
    fetchAll();
  }

  async function approvePost(id) {
    if (!session) return;
    await supabase.from("posts").update({ approved: true }).eq("id", id);
    fetchAll();
  }

  async function deletePost(id) {
    if (!session) return;
    await supabase.from("posts").delete().eq("id", id);
    fetchAll();
  }

  async function submitComment(postId) {
    const draft = commentForms[postId] || "";
    if (!draft.trim()) return;
    await supabase.from("comments").insert([{ post_id: postId, name: "anonymous", body: draft.trim() }]);
    setCommentForms((current) => ({ ...current, [postId]: "" }));
    setOpenComments((current) => ({ ...current, [postId]: true }));
    fetchAll();
  }

  async function deleteComment(id) {
    if (!session) return;
    await supabase.from("comments").delete().eq("id", id);
    fetchAll();
  }

  async function adminLogin(event) {
    event.preventDefault();
    setAdminError("");
    const { error } = await supabase.auth.signInWithPassword({
      email: adminEmail,
      password: adminPassword,
    });
    if (error) {
      setAdminError("wrong login");
      return;
    }
    setPage("admin");
  }

  async function adminLogout() {
    await supabase.auth.signOut();
    setPage("feed");
  }

  function goAdminLogin() {
    setAdminEmail("");
    setAdminPassword("");
    setAdminError("");
    setPage(session ? "admin" : "admin-login");
  }

  return (
    <main className="min-h-screen bg-white px-2 py-2 font-[Helvetica,Arial,sans-serif] text-[#000080] antialiased md:px-5">
      <header className="mx-auto max-w-5xl border border-[#000080] bg-white p-2">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 text-left">
            <pre className="mb-2 block max-w-full overflow-x-auto whitespace-pre bg-white py-2 font-['Courier_New',monospace] text-[4px] leading-[4px] text-[#000080] md:px-2 md:text-[8px] md:leading-[8px]">{asciiLogo}</pre>
            <h1 className="text-5xl font-bold leading-[0.86] tracking-[-0.075em] text-[#000080] md:text-7xl">realityvonts</h1>
            <p className="mt-2 text-[13px] leading-none text-[#000080]">ur local nyc hot tea hoe</p>
          </div>
          <nav className="flex shrink-0 gap-3 text-sm md:pt-1">
            <button type="button" onClick={() => setPage("feed")} className="underline hover:bg-[#000080] hover:text-white">feed</button>
            <button type="button" onClick={goAdminLogin} className="underline hover:bg-[#000080] hover:text-white">admin</button>
          </nav>
        </div>
      </header>

      <section className="mx-auto mt-2 max-w-5xl border border-[#000080] bg-white p-2 text-sm leading-5">
        <button type="button" onClick={() => setPage("spill")} className="font-bold underline hover:bg-[#000080] hover:text-white">spill</button>
      </section>

      {page === "spill" && (
        <section className="mx-auto mt-2 max-w-5xl border border-[#000080] bg-white text-[#000080]">
          <div className="flex items-center justify-between border-b border-[#000080] bg-[#eef3ff] px-2 py-1 text-sm">
            <span>realityvonts &gt; spill</span>
            <button type="button" onClick={() => setPage("feed")} className="underline hover:bg-[#000080] hover:text-white">back</button>
          </div>
          <form onSubmit={submitPost} className="grid gap-3 p-2 pb-28 text-sm" autoComplete="off">
            <label className="grid gap-1">
              <span className="font-bold uppercase">headline</span>
              <input ref={headlineRef} className="border border-[#000080] bg-white px-2 py-2 text-[16px] text-black outline-none" required />
            </label>
            <label className="grid gap-1">
              <span className="font-bold uppercase">name</span>
              <input ref={nameRef} className="border border-[#000080] bg-white px-2 py-2 text-[16px] text-black outline-none" placeholder="anonymous" />
            </label>
            <label className="grid gap-1">
              <span className="font-bold uppercase">write something</span>
              <textarea ref={bodyRef} className="min-h-48 border border-[#000080] bg-white px-2 py-2 text-[16px] leading-6 text-black outline-none" required />
            </label>
            <label className="grid gap-1">
              <span className="font-bold uppercase">pic</span>
              <input type="file" accept="image/*" onChange={handleFileChange} className="text-black" />
              {picPreview && <img src={picPreview} alt="preview" className="mt-2 max-h-48 max-w-full border border-[#000080] object-contain" />}
            </label>
            <div className="border-t border-[#000080] pt-2">
              <p className="mb-2 text-xs text-[#000080]">posts do not go live until approved by admin</p>
              <button className="border border-[#000080] bg-[#eef3ff] px-3 py-1 font-bold hover:bg-[#000080] hover:text-white">submit</button>
            </div>
          </form>
        </section>
      )}

      {page === "admin-login" && (
        <section className="mx-auto mt-2 max-w-5xl border border-[#000080] bg-white text-[#000080]">
          <div className="flex items-center justify-between border-b border-[#000080] bg-[#eef3ff] px-2 py-1">
            <h2 className="text-2xl font-bold">admin</h2>
            <button type="button" onClick={() => setPage("feed")} className="underline hover:bg-[#000080] hover:text-white">close</button>
          </div>
          <form className="grid max-w-sm gap-3 p-2 text-sm" onSubmit={adminLogin}>
            <label className="grid gap-1">
              <span className="font-bold uppercase">email</span>
              <input type="email" value={adminEmail} onChange={(event) => setAdminEmail(event.target.value)} className="border border-[#000080] bg-white px-2 py-2 text-[16px] text-black outline-none" required />
            </label>
            <label className="grid gap-1">
              <span className="font-bold uppercase">password</span>
              <input type="password" value={adminPassword} onChange={(event) => setAdminPassword(event.target.value)} className="border border-[#000080] bg-white px-2 py-2 text-[16px] text-black outline-none" required />
            </label>
            {adminError && <p className="text-sm text-black">{adminError}</p>}
            <button className="w-fit border border-[#000080] bg-[#eef3ff] px-3 py-1 font-bold hover:bg-[#000080] hover:text-white">enter</button>
          </form>
        </section>
      )}

      {page === "admin" && session && (
        <section className="mx-auto mt-2 max-w-5xl border border-[#000080] bg-white text-[#000080]">
          <div className="flex items-center justify-between border-b border-[#000080] bg-[#eef3ff] px-2 py-1">
            <h2 className="text-2xl font-bold">admin</h2>
            <button type="button" onClick={adminLogout} className="underline hover:bg-[#000080] hover:text-white">logout</button>
          </div>

          <div className="border-b border-[#000080] bg-[#eef3ff] px-2 py-1 text-sm font-bold uppercase tracking-[0.02em]">pending posts</div>
          {pendingPosts.length === 0 ? <p className="p-2 text-sm text-black">no pending posts.</p> : (
            <ol className="divide-y divide-[#000080]">
              {pendingPosts.map((post) => (
                <li key={post.id} className="p-2">
                  <p className="text-xs">submitted by {post.name} · {formatTime(post.created_at)}</p>
                  <h3 className="text-xl font-bold underline">{post.headline}</h3>
                  {post.pic && <img src={post.pic} alt="pending submission" className="my-2 max-h-72 max-w-full border border-[#000080] object-contain" />}
                  <p className="my-2 whitespace-pre-line text-sm leading-6 text-black">{post.body}</p>
                  <div className="flex gap-2">
                    <button type="button" onClick={() => approvePost(post.id)} className="border border-[#000080] bg-[#eef3ff] px-3 py-1 text-sm font-bold hover:bg-[#000080] hover:text-white">approve</button>
                    <button type="button" onClick={() => deletePost(post.id)} className="border border-[#000080] px-3 py-1 text-sm hover:bg-[#000080] hover:text-white">delete</button>
                  </div>
                </li>
              ))}
            </ol>
          )}

          <div className="border-t border-b border-[#000080] bg-[#eef3ff] px-2 py-1 text-sm font-bold uppercase tracking-[0.02em]">live posts</div>
          {approvedPosts.length === 0 ? <p className="p-2 text-sm text-black">no live posts.</p> : (
            <ol className="divide-y divide-[#000080]">
              {approvedPosts.map((post) => (
                <li key={post.id} className="p-2">
                  <p className="text-xs text-[#000080]">by {post.name} · {formatTime(post.created_at)}</p>
                  <h3 className="text-xl font-bold underline">{post.headline}</h3>
                  <p className="my-2 whitespace-pre-line text-sm leading-6 text-black">{post.body}</p>
                  <button type="button" onClick={() => deletePost(post.id)} className="border border-[#000080] px-3 py-1 text-sm hover:bg-[#000080] hover:text-white">delete post</button>
                </li>
              ))}
            </ol>
          )}

          <div className="border-t border-b border-[#000080] bg-[#eef3ff] px-2 py-1 text-sm font-bold uppercase tracking-[0.02em]">comments</div>
          {comments.length === 0 ? <p className="p-2 text-sm text-black">no comments yet.</p> : (
            <ol className="divide-y divide-[#000080]">
              {comments.map((comment) => {
                const parent = posts.find((post) => post.id === comment.post_id) || pendingPosts.find((post) => post.id === comment.post_id);
                return (
                  <li key={comment.id} className="p-2">
                    <p className="text-xs text-[#000080]">on: {parent?.headline || "deleted post"}</p>
                    <p className="my-1 whitespace-pre-line text-sm leading-5 text-black">{comment.body}</p>
                    <p className="mb-2 text-[11px] text-[#000080]">{comment.name || "anonymous"} · {formatTime(comment.created_at)}</p>
                    <button type="button" onClick={() => deleteComment(comment.id)} className="border border-[#000080] px-3 py-1 text-sm hover:bg-[#000080] hover:text-white">delete comment</button>
                  </li>
                );
              })}
            </ol>
          )}
        </section>
      )}

      {page === "feed" && (
        <section id="feed" className="mx-auto mt-2 max-w-5xl border border-[#000080]">
          <div className="border-b border-[#000080] bg-[#eef3ff] px-2 py-1 text-[13px] font-bold uppercase tracking-[0.02em]">latest posts</div>
          {approvedPosts.length === 0 ? <p className="p-2 text-sm text-black">no posts yet.</p> : (
            <ol className="divide-y divide-[#000080]">
              {approvedPosts.map((post) => {
                const postComments = commentsByPost[post.id] || [];
                const isExpanded = expanded[post.id];
                const shouldTrim = post.body.length > 360;
                const visibleBody = !isExpanded && shouldTrim ? `${post.body.slice(0, 360)}...` : post.body;
                return (
                  <li key={post.id} className="grid gap-2 border-b border-[#000080] p-3 md:grid-cols-[130px_1fr] md:gap-4">
                    <div className="text-[11px] leading-4 text-[#000080]">
                      <p>{formatTime(post.created_at)}</p>
                      <p>by {post.name}</p>
                    </div>
                    <article className="relative">
                      <h2 className="text-[22px] font-bold leading-[0.95] tracking-[-0.035em] text-[#000080] md:text-[30px]">
                        <button className="text-left underline hover:bg-[#000080] hover:text-white">{post.headline}</button>
                      </h2>
                      {post.pic && <img src={post.pic} alt="submitted" className="my-2 max-h-[420px] max-w-full border border-[#000080] object-contain" />}
                      <p className="max-w-3xl whitespace-pre-line text-[15px] leading-[1.55] text-black">{visibleBody}</p>
                      {shouldTrim && (
                        <button type="button" onClick={() => setExpanded((current) => ({ ...current, [post.id]: !isExpanded }))} className="mt-1 text-[13px] underline hover:bg-[#000080] hover:text-white">
                          {isExpanded ? "show less" : "read more"}
                        </button>
                      )}
                      <div className="mt-3 border-t border-[#000080] pt-2">
                        <button type="button" onClick={() => setOpenComments((current) => ({ ...current, [post.id]: !current[post.id] }))} className="text-[13px] underline hover:bg-[#000080] hover:text-white">
                          comments ({postComments.length})
                        </button>
                        {openComments[post.id] && (
                          <div className="mt-2 space-y-2">
                            {postComments.length === 0 ? <p className="text-xs text-black">no comments yet.</p> : (
                              <ol className="divide-y divide-[#000080] border border-[#000080]">
                                {postComments.map((comment) => (
                                  <li key={comment.id} className="p-2 text-sm leading-5 text-black">
                                    <p className="mb-1 text-[11px] leading-none text-[#000080]">{comment.name || "anonymous"} · {formatTime(comment.created_at)}</p>
                                    <p className="whitespace-pre-line">{comment.body}</p>
                                  </li>
                                ))}
                              </ol>
                            )}
                            <form className="grid max-w-xl gap-2 md:flex" onSubmit={(event) => { event.preventDefault(); submitComment(post.id); }}>
                              <input value={commentForms[post.id] || ""} onChange={(event) => setCommentForms((current) => ({ ...current, [post.id]: event.target.value }))} placeholder="say something" className="w-full border border-[#000080] bg-white px-2 py-2 text-[16px] text-black outline-none md:py-1 md:text-sm" />
                              <button className="w-fit border border-[#000080] bg-[#eef3ff] px-3 py-1 text-sm font-bold hover:bg-[#000080] hover:text-white">reply</button>
                            </form>
                          </div>
                        )}
                      </div>
                    </article>
                  </li>
                );
              })}
            </ol>
          )}
        </section>
      )}

      <footer className="mx-auto mt-2 max-w-5xl pb-6 text-xs text-[#000080]">
        <p>© realityvonts. do not post addresses, phone numbers, threats, private documents, or explicit identity-revealing info.</p>
      </footer>
    </main>
  );
}

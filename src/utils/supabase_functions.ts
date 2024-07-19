import supabase from "../config/supabaseClient";


const upload_file_to_supabase = async (file: File) => {
    return supabase.storage
      .from("socks_src") // Replace with your bucket name
      .upload(`${Date.now()}.${file.name.split(".").pop()}`, file);
  };
  
  const get_file_url = (path: string) => {
    const {
      data: { publicUrl },
    } = supabase.storage.from("socks_src").getPublicUrl(path);
  
    return publicUrl;
  };


  export {upload_file_to_supabase, get_file_url}
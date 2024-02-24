import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";



// localhost3000
export const client = createClient({
  projectId: "dp879o6b",
  apiVersion: "2023-05-03",
  dataset: "production",
  token:
    "skF9Nkcykz7GOciQ1X4jVLziS298Ki5Q9BsRCAC5hWQFsgfCFv8LH1icmZhf4qP7txJnIC7tnTHV6E0mI7R0UGUDUn6SqbegVjuRkIHRTqRWLTcchvGhecOzyjjhfKk7Tupgho5XvzzLfv0IyX0uVpVZzgD9XSCGvfWEciyAWeX2zUNqysVc",
  useCdn: false,
});



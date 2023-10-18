import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getPost as fetchPost, addPost} from './firebase';

export default function UsePost(){
    const queryClient = useQueryClient();

    const postQuery = useQuery(['post'], fetchPost,{
        staleTime: 1000 * 60,
    });

    const addNewPost = useMutation(
        ({post, url}) => addPost(post, url),
        {
            onSuccess: () => queryClient.invalidateQueries(['posts']),
        }
    );
    return { postQuery, addNewPost};
}
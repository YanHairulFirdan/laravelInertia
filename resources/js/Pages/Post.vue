<template>
    <div class="post">
        <h4>{{ post.title }}</h4>
        <h6>{{ post.author }}</h6>
        <p>
            {{ post.content }}
        </p>
        <div class="d-flex justify-content-end">
            <button class="btn btn-danger" @click="deleteCurrentPost">Delete</button>
            <button class="btn btn-success" @click="setCurrentPost">Edit Posts</button>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapMutations, mapActions } = createNamespacedHelpers('postStore')

export default {
    props:{
        post:{
            type:Object,
            require:true
        }
    },
    methods:{
        ...mapMutations([
            'SET_CURRENT_POST',
        ]),
        ...mapActions([
            'deletePost',
        ]),
        setCurrentPost(){
            this.SET_CURRENT_POST(this.post)
        },
        deleteCurrentPost(){
           this.deletePost(this.post.id);
        }
    }
}
</script>

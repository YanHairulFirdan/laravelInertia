<template>
    <div class="form-inline mb-5 border-bottom-1">
        <div class="row">
            <div class="col-3">
                <div class="form-group">
                    <input type="text" class="form-control" v-model="post.title" placeholder="title" />
                </div>
            </div>
            <div class="col-3">
                <div class="form-group">
                    <input type="text" class="form-control" v-model="post.author" placeholder="author" />
                </div>
            </div>
            <div class="col-3">
                <div class="form-group">
                    <textarea name="" id="" class="form-control" rows="2" v-model="post.content" placeholder="content"></textarea>
                </div>
            </div>
            <div class="col-3">
                <button type="button" class="btn btn-primary mb-2" @click="savePost">
                    Save Post
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapActions, mapState } = createNamespacedHelpers('postStore')
export default {
    data(){
        return {
            post :{
                title:'',
                author:'',
                content:'',
            }
        }
    },
    computed:{
        ...mapState([
            'posts',
            'currentPost',
        ]),
        currentPostExists(){
            return this.currentPost != undefined;
        }
    },
    methods:{
        ...mapActions([
            'storePost',
            'updatePost',
        ]),
        savePost(){
            if (this.currentPostExists) {
                this.updatePost(this.post)
            }else{
                this.storePost(this.post)
            }

        }
    },
    watch:{
        currentPost:{
            handler(currentPost){
                if (this.currentPostExists) {
                    this.post = currentPost
                }
            }
        }
    }
};
</script>

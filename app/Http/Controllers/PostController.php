<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;


class PostController extends Controller
{
    public function index()
    {
        return Inertia::render(
            'PostIndex',
            [
                'posts' => PostResource::collection(Post::get())
            ]
        );
    }

    public function store(Request $request)
    {
        return Post::create($request->all());
    }

    public function update(Request $request, Post $post)
    {
        $post->update($request->all());

        return response('success');
    }

    public function destroy(Post $post)
    {
        $post->delete();

        return response('success');
    }
}

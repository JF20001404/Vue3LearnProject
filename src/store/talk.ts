import { defineStore } from 'pinia'
export let useTalkStore = defineStore('talk', {
    state() {
        return {
            talkList: JSON.parse(localStorage.getItem('talkList') as string) || []
        }
    },
    actions: { 
        addTalk(obj: { id: string, title: string }) {
            console.log(obj)
            this.talkList.unshift(obj)
        }
    }
})
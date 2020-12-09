<template>
    <div class="modal fade text-dark" :id="`edit-${name}-modal`" aria-hidden="true" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{{ newElement ? 'Add ' + name: 'Edit ' + name }}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <slot name="modal-body" />
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="clear()">Close</button>
                    <button type="button" class="btn btn-primary" @click="onSubmit">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        modalData: Object, // Form
        url: String,
        id: Number,
        newElement:Boolean
    },

    methods: {
        onSubmit() {
            if(this.newElement){
                //Object.assign(this.modalData.orginalData, {"user_id": this.$route.params.id});
                console.log(this.modalData);
                this.modalData.post(this.url).then(()=>{
                    console.log(this.modalData);
                    this.$emit('onSuccess');
                    this.modalData.reset();
                })
                .catch((error)=>{
                    console.log(error);
                })
            }else{
                this.modalData.patch(this.url + '/' + this.$route.params.id + '/' + this.id).then(()=>{
                    this.$emit('onSuccess');
                })
                .catch((error)=>{
                    console.log(error);
                })
            }
        },

        clear() {
            this.modalData.reset();
        }
    },
}
</script>
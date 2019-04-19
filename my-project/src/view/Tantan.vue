<template>
   <div>
        <Xheader />
        <XmainHome />
        <xfooter />
   </div>
    
</template>
<style scoped>

</style>

<script>
import Xheader from '../components/Xheader'
import XmainHome from '../components/XmainHome'
import Xfooter from "../components/Xfooter.vue";
export default {
    components:{
        Xheader,
        XmainHome,
        Xfooter
    }
}
</script>
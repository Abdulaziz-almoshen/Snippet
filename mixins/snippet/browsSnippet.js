import feather from "feather-icons";
import { orderBy as _orderBy } from 'lodash'
import hotkeys from 'hotkeys-js';
export default {
  computed: {
    IconLeft: function () {
      return feather.toSvg(this.left)
    },
    IconRight: function () {
      return feather.toSvg(this.right)
    },
    IconPlus: function () {
      return feather.toSvg(this.plus)
    }, IconEdit: function () {
      return feather.toSvg(this.edit)
    }, IconDelet: function () {
      return feather.toSvg(this.delete)
    },
    firstStep() {
      return this.orderedStepsAsc[0]
    },
    currentStep() {
      return this.orderedStepsAsc.find(
        (e) => e.uuid === this.$route.query.step
      ) || this.firstStep
    },
    orderedStepsAsc() {
      return _orderBy(
        this.steps, 'order', 'asc'
      )
    },
    currentStepIndex() {
      return this.orderedStepsAsc.map(
        (s) => s.uuid
      ).indexOf(this.currentStep.uuid)
    },
    orderedStepsDec() {
      return _orderBy(
        this.steps, 'order', 'desc'
      )
    },
    nextStep() {
      return this.orderedStepsAsc.find(
        (e) => e.order > this.currentStep.order
      )
    },
    previousStep() {
      return this.orderedStepsDec.find(
        (e) => e.order < this.currentStep.order
      )
    },

  },
  methods:{
    registerKeyboardShortcut(){
      hotkeys('ctrl+shift+right,ctrl+shift+left', (event, handler) => {
        switch (handler.key) {
          case 'ctrl+shift+right':
            console.log('right')
            if (this.nextStep){
              this.goToStep(this.nextStep)
            }
            break;
          case 'ctrl+shift+left':
            if (this.previousStep){
              this.goToStep(this.previousStep)
            }
            break;
          default: alert(event);
        }
      });
    },
    goToStep(step) {
      this.$router.push({
        query: {
          step: step.uuid
        }
      })
    },
  },
  mounted() {
    this.registerKeyboardShortcut()
  }

}

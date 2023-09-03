import {
    animate,
    AnimationTriggerMetadata,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';

export function collapseAnimation(
    triggerName: string,
    transitionData: string,
): AnimationTriggerMetadata {
    return trigger(triggerName, [
        state(
            'collapsed',
            style({
                height: '0px',
                overflow: 'hidden',
                opacity: 0,
                padding: '0 24px',
                margin: 0,
            }),
        ),
        state(
            'open',
            style({
                opacity: 1,
                overflow: 'hidden',
            }),
        ),
        transition('collapsed <=> open', animate(transitionData)),
    ]);
}

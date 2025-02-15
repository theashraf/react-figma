import { Observable, Subject } from 'rxjs';
import { concatAll, debounceTime, map } from 'rxjs/operators';
import { yogaHandler } from './yogaHandler';

const $yogaRoot = new Subject();

export const $updatedYogaCoords = new Subject();

$yogaRoot
    .pipe(
        debounceTime(100),
        map((instance: any) => {
            return new Observable(subscriber => {
                const handleYogaProps = (newProps, instance) => {
                    const { children: yogaChildren, ...yogaPropsWithoutChildren } = newProps;
                    if (instance.parent && instance.parent.type === 'GROUP') {
                        yogaPropsWithoutChildren.x += instance.parent.x;
                        yogaPropsWithoutChildren.y += instance.parent.y;
                    }

                    subscriber.next({ instance, props: yogaPropsWithoutChildren });
                    if (instance.children) {
                        instance.children.forEach((child, index) => {
                            handleYogaProps(newProps.children[index], child);
                        });
                    }
                };
                yogaHandler(instance).then(newProps => {
                    handleYogaProps(newProps, instance);
                    subscriber.complete();
                });
            });
        }),
        concatAll()
    )
    .subscribe($updatedYogaCoords);

export const updateYogaRoot = (root: any) => {
    $yogaRoot.next(root);
};

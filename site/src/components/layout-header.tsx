type Props = {
  sectionTitle: string | undefined;
  background: string;
  aspectRatio: string;
};

export function LayoutHeader(props: Props) {
  return (
    <div className="relative">
      <img
        src={props.background}
        style={{ aspectRatio: props.aspectRatio }}
        className="w-full"
      />
      <div className="absolute bottom-4 flex w-full flex-col items-center justify-center gap-1">
        <div className="font-cambria text-border text-2xl italic sm:text-4xl lg:text-4xl xl:text-7xl">
          {props.sectionTitle && (
            <>
              <div className="text-center text-green-300">
                {props.sectionTitle}
              </div>
              <hr className="border-2 text-white" />
            </>
          )}
          <div className="text-center text-white">
            Криворізька гімназія №55
            <br />
            Криворізької міської ради
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Map(){
    return(
        <div className="flex items-cemter justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1907860552883!2d85.32064107509376!3d27.711395076180164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1900449576b3%3A0x8cbc9b2634e299c!2sDanpheLink%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1738567807011!5m2!1sen!2snp"
          width="390"
          height="390"
          style={{
            border: 0,
          }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    )
}